// API Utilities

// Fetch Bible text from bible-api.com (KJV)
// Helper for delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchBibleText(reference, retries = 3, backoff = 500) {
    // bible-api.com expects references like "Genesis+1:1-20"
    const encodedRef = encodeURIComponent(reference);
    const url = `https://bible-api.com/${encodedRef}?translation=kjv`;

    for (let i = 0; i < retries; i++) {
        try {
            console.log(`Fetching reading from: ${url} (Attempt ${i + 1}/${retries})`);
            const response = await fetch(url);

            if (!response.ok) {
                // If it's a 429 (Too Many Requests), definitely retry.
                // If 404 (Not Found), maybe don't retry? But bible-api might 404 on transient issues too.
                // Let's retry on all non-200s for robustness, except maybe 400.
                if (response.status === 400) {
                    throw new Error(`API Error: ${response.status} Bad Request`);
                }
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            const isLastAttempt = i === retries - 1;
            console.warn(`Attempt ${i + 1} failed for ${reference}:`, error);

            if (isLastAttempt) {
                console.error(`All ${retries} attempts failed for ${reference}`);
                throw error;
            }

            // Wait before retrying (exponential backoff)
            const waitTime = backoff * Math.pow(2, i); // 500, 1000, 2000...
            await delay(waitTime);
        }
    }
}

// Format verse text from API response
export function formatVerseText(apiResponse) {
    if (!apiResponse || !apiResponse.verses) {
        // Some responses might be different? usually bible-api returns { verses: [...] }
        return [];
    }

    return apiResponse.verses.map(verse => ({
        verse: verse.verse,
        text: verse.text.trim()
    }));
}
