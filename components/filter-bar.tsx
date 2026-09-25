'use client'

import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type FilterValue = 'all' | 'book' | 'movie'
export type SortValue = 'latest' | 'highest' | 'lowest'

const TABS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Books', value: 'book' },
  { label: 'Movies', value: 'movie' },
]

const SORTS: { label: string; value: SortValue }[] = [
  { label: 'Latest', value: 'latest' },
  { label: 'Highest Rated', value: 'highest' },
  { label: 'Lowest Rated', value: 'lowest' },
]

interface FilterBarProps {
  filter: FilterValue
  sort: SortValue
  onFilterChange: (value: FilterValue) => void
  onSortChange: (value: SortValue) => void
}

export function FilterBar({
  filter,
  sort,
  onFilterChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div
        role="tablist"
        aria-label="Filter reviews by type"
        className="inline-flex w-fit items-center gap-1 rounded-lg border border-border bg-muted/50 p-1"
      >
        {TABS.map((tab) => {
          const active = filter === tab.value
          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={active}
              onClick={() => onFilterChange(tab.value)}
              className={cn(
                'rounded-md px-4 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                active
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-muted-foreground">
          Sort by
        </label>
        <div className="relative">
          <select
            id="sort"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortValue)}
            className="h-9 appearance-none rounded-lg border border-border bg-background py-1 pr-9 pl-3 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {SORTS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
