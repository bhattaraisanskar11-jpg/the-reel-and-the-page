import { AtSign, Mail, Rss, Send } from 'lucide-react'

const LINK_GROUPS = [
  {
    title: 'Explore',
    links: ['Latest Reviews', 'Book Reviews', 'Movie Reviews', 'Top Rated'],
  },
  {
    title: 'About',
    links: ['Our Story', 'The Team', 'Rating System', 'Contact'],
  },
  {
    title: 'More',
    links: ['Submit a Title', 'Advertise', 'Privacy', 'Terms'],
  },
]

const SOCIALS = [
  { label: 'Follow us', icon: AtSign },
  { label: 'RSS feed', icon: Rss },
  { label: 'Newsletter', icon: Send },
  { label: 'Email us', icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-lg font-semibold tracking-tight">
              The Reel <span className="text-gold">&amp;</span> The Page
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Honest, considered reviews of books and film — for people who love a
              good story in any form.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="size-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-semibold tracking-wide uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} The Reel &amp; The Page. All rights reserved.</p>
          <p>
            Crafted with care for storytellers and their audiences.
          </p>
        </div>
      </div>
    </footer>
  )
}
