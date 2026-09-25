import Image from 'next/image'
import { CategoryBadge } from '@/components/category-badge'
import { StarRating } from '@/components/star-rating'
import { formatDate, type Review } from '@/lib/reviews'

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article id={`review-${review.id}`} className="group h-full">
      <a
        href={`#review-${review.id}`}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <div className="relative aspect-[2/3] overflow-hidden bg-muted">
          <Image
            src={review.coverImage || '/placeholder.svg'}
            alt={`Cover of ${review.title} by ${review.creator}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <CategoryBadge category={review.category} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <StarRating rating={review.rating} size="sm" />

          <h3 className="mt-3 font-serif text-xl leading-snug font-semibold tracking-tight text-balance">
            {review.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {review.category === 'book' ? 'by' : 'dir.'} {review.creator} · {review.year}
          </p>

          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/75">
            {review.excerpt}
          </p>

          <div className="mt-auto flex items-center gap-2 pt-5 text-xs text-muted-foreground">
            <Image
              src={review.reviewer.avatar || '/placeholder.svg'}
              alt=""
              width={22}
              height={22}
              className="size-[22px] rounded-full border border-border object-cover"
            />
            <span className="font-medium text-foreground/80">{review.reviewer.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={review.publishedAt}>{formatDate(review.publishedAt)}</time>
          </div>
        </div>
      </a>
    </article>
  )
}
