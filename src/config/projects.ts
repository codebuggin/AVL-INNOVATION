export type ProjectStatus = 'live' | 'in-development'
export type ProjectCategory = 'website' | 'app' | 'Healthcare / Personal Brand' | 'AI Automation'

export interface Project {
  slug: string
  client: string
  title: string
  description: string
  category: ProjectCategory
  status: ProjectStatus
  liveUrl?: string
  imageUrl?: string
  /** How the preview image fills the card. Defaults to 'cover' (crops to fill). */
  imageFit?: 'cover' | 'contain'
  tags?: string[]
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
    slug: 'dr-syeds-clinic',
    client: "Dr. Syed's Advanced Homeo Clinics",
    title: 'Multi-branch homeopathy clinic website',
    description: 'Website for a multi-branch homeopathy clinic in Hyderabad.',
    category: 'website',
    status: 'live',
    liveUrl: 'https://www.drsyedhomeoclinics.com',
    imageUrl: '/mockups/dr-syed-homeo.png',
  },
  {
    slug: 'dr-prudhvi',
    client: 'Dr. Prudhvi Krishna',
    title: 'Cinematic editorial personal brand site',
    description:
      'Cinematic editorial personal brand site for a leading gastroenterologist in Hyderabad. Built with React, Vite, and Framer Motion.',
    category: 'Healthcare / Personal Brand',
    status: 'live',
    liveUrl: 'https://www.docprudhvi.com',
    imageUrl: '/mockups/docprudvi.png',
    imageFit: 'contain',
    tags: ['React', 'Framer Motion', 'Vite'],
  },
  {
    slug: 'raabbtaa-lead-gen',
    client: 'Raabbtaa Lead Gen Agent',
    title: 'AI lead generation & outreach agent',
    description:
      'AI-powered lead generation agent that scans Google Places, scores leads via GPT-4o-mini, and auto-generates personalized WhatsApp pitches. Built for the Raabbtaa Foundation NGO platform.',
    category: 'AI Automation',
    status: 'live',
    liveUrl: 'https://www.raabbtaa.com',
    imageUrl: '/mockups/raabbtaa%20lead%20gen.png',
    imageFit: 'contain',
    tags: ['React', 'Vite', 'GPT-4o', 'Node.js'],
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
    slug: 'lavish-caterers',
    client: 'Lavish Caterers',
    title: 'High-end catering business website',
    description: 'Website for a high-end catering business in Hyderabad.',
    category: 'website',
    status: 'in-development',
    imageUrl: '/mockups/lavish-caterers.svg',
  },
]
