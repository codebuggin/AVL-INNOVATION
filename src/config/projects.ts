export type ProjectStatus = 'live' | 'in-development'
export type ProjectCategory = 'website' | 'app'

export interface Project {
  slug: string
  client: string
  title: string
  description: string
  category: ProjectCategory
  status: ProjectStatus
  liveUrl?: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'taseer-ayurved',
    client: 'Taseer Ayurved',
    title: 'Ecommerce website for an Ayurvedic practitioner',
    description: 'Ecommerce website for an Ayurvedic practitioner based in Ahmedabad.',
    category: 'website',
    status: 'live',
    liveUrl: 'https://www.taseerayurved.com',
    imageUrl: '/mockups/taseer-ayurved.png',
  },
  {
    slug: 'diesel-opticals',
    client: 'Diesel Opticals',
    title: 'Premium optical store website',
    description: 'Website for a premium optical store with two branches in Hyderabad.',
    category: 'website',
    status: 'in-development',
    imageUrl: '/mockups/diesel-opticals.svg',
  },
  {
    slug: 'dr-syeds-clinic',
    client: "Dr. Syed's Advanced Homeo Clinics",
    title: 'Multi-branch homeopathy clinic website',
    description: 'Website for a multi-branch homeopathy clinic in Hyderabad.',
    category: 'website',
    status: 'in-development',
    imageUrl: '/mockups/dr-syed-homeo.png',
  },
  {
    slug: 'lavish-caterers',
    client: 'Lavish Caterers',
    title: 'High-end catering business website',
    description: 'Website for a high-end catering business in Hyderabad.',
    category: 'website',
    status: 'in-development',
    imageUrl: '/mockups/lavish-caterers.svg',
  },
]
