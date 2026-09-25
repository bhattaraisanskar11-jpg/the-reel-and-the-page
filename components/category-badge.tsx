import { BookOpen, Film } from 'lucide-react'
import type { ReviewCategory } from '@/lib/reviews'
import { cn } from '@/lib/utils'

interface CategoryBadgeProps {
  category: ReviewCategory
  className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const isBook = category === 'book'
  const Icon = isBook ? BookOpen : Film
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur-sm',
        className,
      )}
    >
      <Icon className="size-3.5 text-gold" />
      {isBook ? 'Book' : 'Movie'}
    </span>
  )
}
