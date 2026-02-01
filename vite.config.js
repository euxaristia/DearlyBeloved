import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/prexcommunis.github.io/', // Base path for GitHub Pages (repo name) OR '/' for user site.
  // Wait, if it's a user site (prexcommunis.github.io), base is '/'.
  // If it's a project site (prexcommunis.github.io/repo), base is '/repo/'.
  // The user said "prexcommunis.github.io", which implies user site.
  // BUT if it's failing, maybe it's not at root?
  // Let's assume standard repo deployment for now, which is safe.
  // Actually, if the repo name IS prexcommunis.github.io, then base is '/'.
  // If the user pushes to `gh-pages` branch, it might be different.
  // Let's try base: './' to make it relative and work anywhere.
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'robots.txt'], // Add other assets if valid
      manifest: {
        name: 'Common Prayer - Daily Office',
        short_name: 'Common Prayer',
        description: 'Daily Office prayers from the Book of Common Prayer',
        theme_color: '#8b6914',
        background_color: '#f4f1e8',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'icon.svg', // Will be resolved correctly by Vite
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
