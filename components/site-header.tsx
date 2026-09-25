'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Books', href: '#books' },
  { label: 'Movies', href: '#movies' },
  { label: 'Top Rated', href: '#top-rated' },
  { label: 'About', href: '#about' },
]

function Wordmark({ className }: { className?: string }) {
  return (
    <a
      href="#"
      className={cn(
        'font-serif text-lg leading-none font-semibold tracking-tight sm:text-xl',
        className,
      )}
    >
      The Reel <span className="text-gold">&amp;</span> The Page
    </a>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md transition-shadow',
        scrolled ? 'border-b border-border shadow-sm' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen((v) => !v)}
            aria-expanded={searchOpen}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
          >
            {searchOpen ? <X className="size-[18px]" /> : <Search className="size-[18px]" />}
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-[18px]" />
          </Button>
        </div>
      </div>

      {/* Search bar */}
      <div
        className={cn(
          'overflow-hidden border-border transition-all duration-300',
          searchOpen ? 'max-h-24 border-t' : 'max-h-0',
        )}
      >
        <form
          className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 sm:px-6"
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Search reviews, titles, authors, directors…"
            aria-label="Search reviews"
            className="h-9 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </form>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-y-0 right-0 flex w-72 max-w-[85%] flex-col bg-background shadow-xl"
          >
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <span className="font-serif text-base font-semibold">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-[18px]" />
              </Button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col p-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
