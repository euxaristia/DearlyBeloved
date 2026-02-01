import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Theme State
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('sidebar-open');
    const isMobile = window.innerWidth < 768;
    // On mobile, default closed. On desktop, default open unless saved otherwise.
    if (isMobile) return false;
    return saved !== null ? saved === 'true' : true;
  });

  // Office State
  const [currentOffice, setCurrentOffice] = useState(() => {
    const saved = localStorage.getItem('selected-office');
    if (saved) return saved;
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

  // Persist sidebar state (only meaningful for desktop)
  useEffect(() => {
    localStorage.setItem('sidebar-open', isSidebarOpen);
    // Helper attribute for CSS if needed (though we prefer React state)
    document.documentElement.setAttribute('data-sidebar-open', isSidebarOpen);
  }, [isSidebarOpen]);

  // Persist office
  useEffect(() => {
    localStorage.setItem('selected-office', currentOffice);
  }, [currentOffice]);

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
