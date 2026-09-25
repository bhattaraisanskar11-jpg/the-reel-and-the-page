import { SiteHeader } from '@/components/site-header'
import { FeaturedReview } from '@/components/featured-review'
import { ReviewGrid } from '@/components/review-grid'
import { Newsletter } from '@/components/newsletter'
import { SiteFooter } from '@/components/site-footer'
import { featuredReview, recentReviews } from '@/lib/reviews'

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <FeaturedReview review={featuredReview} />
        <ReviewGrid reviews={recentReviews} />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
