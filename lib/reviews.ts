export type ReviewCategory = 'book' | 'movie'

export interface Reviewer {
  name: string
  avatar: string
}

export interface Review {
  id: string
  title: string
  creator: string
  year: number
  category: ReviewCategory
  rating: number
  excerpt: string
  coverImage: string
  reviewer: Reviewer
  publishedAt: string
  readTime: string
}

const AVATARS = {
  elena: '/images/avatars/elena.png',
  theo: '/images/avatars/theo.png',
  priya: '/images/avatars/priya.png',
  marcus: '/images/avatars/marcus.png',
} as const

export const featuredReview: Review = {
  id: 'featured-1',
  title: 'The Wager',
  creator: 'David Grann',
  year: 2023,
  category: 'book',
  rating: 4.5,
  excerpt:
    'A shipwreck, a mutiny, and a battle over the truth itself. Grann turns an 18th-century naval disaster into a propulsive meditation on survival and the stories we tell to justify it. Meticulous, cinematic, and impossible to put down.',
  coverImage: '/images/covers/the-wager.png',
  reviewer: {
    name: 'Elena Marsh',
    avatar: AVATARS.elena,
  },
  publishedAt: '2026-09-18',
  readTime: '8 min read',
}

export const recentReviews: Review[] = [
  {
    id: 'r-1',
    title: 'Oppenheimer',
    creator: 'Christopher Nolan',
    year: 2023,
    category: 'movie',
    rating: 5,
    excerpt:
      'A towering, fractured portrait of the man who remade the world and could not unmake his own conscience. Cinema at its most ambitious.',
    coverImage: '/images/covers/oppenheimer.png',
    reviewer: { name: 'Theo Nakamura', avatar: AVATARS.theo },
    publishedAt: '2026-09-15',
    readTime: '7 min read',
  },
  {
    id: 'r-2',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    creator: 'Gabrielle Zevin',
    year: 2022,
    category: 'book',
    rating: 4.5,
    excerpt:
      'A love story disguised as a novel about video games — or maybe the other way around. Tender, sprawling, and quietly devastating.',
    coverImage: '/images/covers/tomorrow.png',
    reviewer: { name: 'Priya Anand', avatar: AVATARS.priya },
    publishedAt: '2026-09-12',
    readTime: '6 min read',
  },
  {
    id: 'r-3',
    title: 'Past Lives',
    creator: 'Celine Song',
    year: 2023,
    category: 'movie',
    rating: 4.5,
    excerpt:
      'Two childhood friends, two decades, and the ache of the life not lived. Restrained, luminous filmmaking about time and longing.',
    coverImage: '/images/covers/past-lives.png',
    reviewer: { name: 'Elena Marsh', avatar: AVATARS.elena },
    publishedAt: '2026-09-10',
    readTime: '5 min read',
  },
  {
    id: 'r-4',
    title: 'Klara and the Sun',
    creator: 'Kazuo Ishiguro',
    year: 2021,
    category: 'book',
    rating: 4,
    excerpt:
      'Told through the eyes of an artificial friend, Ishiguro asks what it means to love and to be seen. Deceptively simple, deeply strange.',
    coverImage: '/images/covers/klara.png',
    reviewer: { name: 'Theo Nakamura', avatar: AVATARS.theo },
    publishedAt: '2026-09-08',
    readTime: '6 min read',
  },
  {
    id: 'r-5',
    title: 'Poor Things',
    creator: 'Yorgos Lanthimos',
    year: 2023,
    category: 'movie',
    rating: 4,
    excerpt:
      'A gloriously unhinged fable of self-invention. Baroque, funny, and grotesque in equal measure, anchored by a fearless lead performance.',
    coverImage: '/images/covers/poor-things.png',
    reviewer: { name: 'Priya Anand', avatar: AVATARS.priya },
    publishedAt: '2026-09-05',
    readTime: '7 min read',
  },
  {
    id: 'r-6',
    title: 'The Bee Sting',
    creator: 'Paul Murray',
    year: 2023,
    category: 'book',
    rating: 4.5,
    excerpt:
      'A family unravels in real time across 600 exhilarating pages. Murray balances comedy and catastrophe with astonishing control.',
    coverImage: '/images/covers/bee-sting.png',
    reviewer: { name: 'Marcus Vale', avatar: AVATARS.marcus },
    publishedAt: '2026-09-02',
    readTime: '9 min read',
  },
  {
    id: 'r-7',
    title: 'Anatomy of a Fall',
    creator: 'Justine Triet',
    year: 2023,
    category: 'movie',
    rating: 4.5,
    excerpt:
      'Part courtroom drama, part marital autopsy. A riveting study of ambiguity that refuses to hand you an easy verdict.',
    coverImage: '/images/covers/anatomy-of-a-fall.png',
    reviewer: { name: 'Elena Marsh', avatar: AVATARS.elena },
    publishedAt: '2026-08-29',
    readTime: '6 min read',
  },
  {
    id: 'r-8',
    title: 'Trust',
    creator: 'Hernan Diaz',
    year: 2022,
    category: 'book',
    rating: 4,
    excerpt:
      'Four accounts of the same fortune, each unsettling the last. A dazzling puzzle-box about money, power, and who gets to write history.',
    coverImage: '/images/covers/trust.png',
    reviewer: { name: 'Marcus Vale', avatar: AVATARS.marcus },
    publishedAt: '2026-08-25',
    readTime: '7 min read',
  },
  {
    id: 'r-9',
    title: 'The Holdovers',
    creator: 'Alexander Payne',
    year: 2023,
    category: 'movie',
    rating: 3.5,
    excerpt:
      'A warm, wintry throwback about three lonely people stranded over the holidays. Modest in scale, generous in heart.',
    coverImage: '/images/covers/holdovers.png',
    reviewer: { name: 'Theo Nakamura', avatar: AVATARS.theo },
    publishedAt: '2026-08-21',
    readTime: '5 min read',
  },
  {
    id: 'r-10',
    title: 'Chain-Gang All-Stars',
    creator: 'Nana Kwame Adjei-Brenyah',
    year: 2023,
    category: 'book',
    rating: 3.5,
    excerpt:
      'A savage satire of the carceral state staged as blood sport. Furious and formally daring, if occasionally overloaded.',
    coverImage: '/images/covers/chain-gang.png',
    reviewer: { name: 'Priya Anand', avatar: AVATARS.priya },
    publishedAt: '2026-08-17',
    readTime: '8 min read',
  },
]

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
