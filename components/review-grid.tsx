'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ReviewCard } from '@/components/review-card'
import {
  FilterBar,
  type FilterValue,
  type SortValue,
} from '@/components/filter-bar'
import type { Review } from '@/lib/reviews'

const PAGE_SIZE = 6

export function ReviewGrid({ reviews }: { reviews: Review[] }) {
  const [filter, setFilter] = useState<FilterValue>('all')
  const [sort, setSort] = useState<SortValue>('latest')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const processed = useMemo(() => {
    const filtered =
      filter === 'all' ? reviews : reviews.filter((r) => r.category === filter)

    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'highest') return b.rating - a.rating
      if (sort === 'lowest') return a.rating - b.rating
      return +new Date(b.publishedAt) - +new Date(a.publishedAt)
    })

    return sorted
  }, [reviews, filter, sort])

  const shown = processed.slice(0, visible)
  const hasMore = visible < processed.length

  const handleFilter = (value: FilterValue) => {
    setFilter(value)
    setVisible(PAGE_SIZE)
  }

  const handleSort = (value: SortValue) => {
    setSort(value)
    setVisible(PAGE_SIZE)
  }

  return (
    <section
      id="recent"
      aria-labelledby="recent-heading"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
    >
      <div className="mb-8 flex flex-col gap-2">
        <h2
          id="recent-heading"
          className="font-serif text-3xl font-semibold tracking-tight"
        >
          Recent Reviews
        </h2>
        <p className="text-muted-foreground">
          Fresh takes on the books and films worth your time.
        </p>
      </div>

      <div className="mb-8">
        <FilterBar
          filter={filter}
          sort={sort}
          onFilterChange={handleFilter}
          onSortChange={handleSort}
        />
      </div>

      {shown.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
          No reviews match this filter yet.
        </p>
      )}

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
          >
            Load More Reviews
          </Button>
        </div>
      )}
    </section>
  )
}
