'use client'

import { useEffect, useState } from 'react'
import { CircleCheck, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!submitted) return
    const timer = setTimeout(() => setSubmitted(false), 4000)
    return () => clearTimeout(timer)
  }, [submitted])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section
      id="about"
      aria-labelledby="newsletter-heading"
      className="border-y border-border bg-secondary"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <span className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-background text-gold">
          <Mail className="size-5" aria-hidden="true" />
        </span>
        <h2
          id="newsletter-heading"
          className="mt-5 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          The best of books &amp; film, weekly
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
          Join thousands of readers and viewers. One thoughtful email each week —
          new reviews, hidden gems, and staff favorites. No spam, ever.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-11 flex-1 rounded-lg border border-border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <Button type="submit" size="lg">
            Subscribe
          </Button>
        </form>

        <div className="mt-4 h-6" aria-live="polite">
          {submitted && (
            <p
              role="status"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold"
            >
              <CircleCheck className="size-4" aria-hidden="true" />
              You&apos;re subscribed! Check your inbox soon.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
