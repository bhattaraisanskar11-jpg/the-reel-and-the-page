'use client'

import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/use-theme'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
          : 'Toggle color theme'
      }
    >
      {mounted && theme === 'dark' ? (
        <Sun className="size-[18px]" />
      ) : (
        <Moon className="size-[18px]" />
      )}
    </Button>
  )
}
