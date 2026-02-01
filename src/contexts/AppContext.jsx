import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Theme State
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Sidebar State -- default closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Office State -- always calculate based on time for fresh entry
  const [currentOffice, setCurrentOffice] = useState(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) return "morning";
    if (hour >= 11 && hour < 14) return "midday";
    if (hour >= 14 && hour < 20) return "evening";
    return "compline";
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark-mode');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Persist sidebar state (remove this if we always want closed default, but user said 'default closed', so let's removing persistence for sidebar state might be safer to ensure it obeys 'default')
  // We will remove the sidebar persistence to strictly follow "default panel closed".
  // Only persisting theme now.

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      // If switching to mobile, ensure sidebar is closed by default to avoid overlay
      /* Optional: logic to auto-close or restore state */
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AppContext.Provider value={{
      theme, toggleTheme,
      isSidebarOpen, toggleSidebar, closeSidebar,
      currentOffice, setCurrentOffice
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
