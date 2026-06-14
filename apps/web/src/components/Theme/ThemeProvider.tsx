import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'cream' | 'warm-beige' | 'cool-gray' | 'taupe';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_CLASSES: Record<Theme, string> = {
  cream: 'theme-cream',
  'warm-beige': 'theme-warm-beige',
  'cool-gray': 'theme-cool-gray',
  taupe: 'theme-taupe',
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('cream');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null;
    if (saved && ['cream', 'warm-beige', 'cool-gray', 'taupe'].includes(saved)) {
      setThemeState(saved);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={THEME_CLASSES[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
