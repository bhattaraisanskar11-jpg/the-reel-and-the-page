import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

type StarSize = 'sm' | 'md' | 'lg'

interface StarRatingProps {
  rating: number
  size?: StarSize
  showScore?: boolean
  className?: string
}

const sizeMap: Record<StarSize, { star: string; text: string; gap: string }> = {
  sm: { star: 'size-3.5', text: 'text-xs', gap: 'gap-1.5' },
  md: { star: 'size-4', text: 'text-sm', gap: 'gap-2' },
  lg: { star: 'size-5', text: 'text-base', gap: 'gap-2.5' },
}

export function StarRating({
  rating,
  size = 'md',
  showScore = true,
  className,
}: StarRatingProps) {
  const clamped = Math.max(0, Math.min(5, rating))
  const percent = (clamped / 5) * 100
  const styles = sizeMap[size]
  const stars = [0, 1, 2, 3, 4]

  return (
    <div
      className={cn('flex items-center', styles.gap, className)}
      role="img"
      aria-label={`Rated ${clamped} out of 5 stars`}
    >
      <div className="relative inline-flex" aria-hidden="true">
        <div className="flex text-muted-foreground/35">
          {stars.map((i) => (
            <Star key={i} className={cn(styles.star, 'fill-current')} />
          ))}
        </div>
        <div
          className="absolute inset-0 flex overflow-hidden text-gold"
          style={{ width: `${percent}%` }}
        >
          {stars.map((i) => (
            <Star
              key={i}
              className={cn(styles.star, 'shrink-0 fill-current')}
            />
          ))}
        </div>
      </div>
      {showScore && (
        <span className={cn('font-medium tabular-nums', styles.text)}>
          {clamped.toFixed(1)}
          <span className="text-muted-foreground">/5</span>
        </span>
      )}
    </div>
  )
}
