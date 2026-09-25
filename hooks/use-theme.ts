'use client'

import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const current = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
    setThemeState(current)
    setMounted(true)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return { theme, setTheme, toggleTheme, mounted }
}
