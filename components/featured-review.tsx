import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CategoryBadge } from '@/components/category-badge'
import { StarRating } from '@/components/star-rating'
import { formatDate, type Review } from '@/lib/reviews'

export function FeaturedReview({ review }: { review: Review }) {
  return (
    <section aria-labelledby="featured-heading" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Featured Review
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
              <Image
                src={review.coverImage || '/placeholder.svg'}
                alt={`Cover of ${review.title} by ${review.creator}`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <CategoryBadge category={review.category} />
              <StarRating rating={review.rating} size="lg" />
            </div>

            <h1
              id="featured-heading"
              className="font-serif text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl"
            >
              {review.title}
            </h1>

            <p className="mt-3 text-base text-muted-foreground">
              {review.category === 'book' ? 'by' : 'directed by'}{' '}
              <span className="font-medium text-foreground">{review.creator}</span>
              {' · '}
              {review.year}
            </p>

            <p className="mt-5 max-w-prose text-lg leading-relaxed text-pretty text-foreground/85">
              {review.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Image
                  src={review.reviewer.avatar || '/placeholder.svg'}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 rounded-full border border-border object-cover"
                />
                <span className="font-medium text-foreground">{review.reviewer.name}</span>
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={review.publishedAt}>{formatDate(review.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden="true" />
                {review.readTime}
              </span>
            </div>

            <Button size="lg" className="mt-8" render={<a href={`#review-${review.id}`} />}>
              Read Full Review
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
