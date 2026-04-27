export interface Service {
  slug: string
  title: string
  tagline: string
  description: string
  features: string[]
  outcome: string
}

export const services: Service[] = [
  {
    slug: 'website-design-development',
    title: 'Website Design & Development',
    tagline: 'A website that works as hard as you do.',
    description: 'We design and build modern, fast websites that bring you new clients, showcase your work, and represent your business with confidence.',
    features: [
      'Custom design tailored to your brand',
      'Mobile-first, fully responsive',
      'Fast loading on every device',
      'Built-in contact and booking flows',
      'Search-engine ready',
      'Easy for you to update',
    ],
    outcome: 'A website that turns visitors into customers.',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Apps your customers will actually open.',
    description: 'We design and develop mobile apps for iOS and Android that help your business serve customers better, faster, and from anywhere.',
    features: [
      'Native-quality experience on iOS and Android',
      'Clean, intuitive design',
      'Backend and admin dashboard included',
      'App Store and Play Store submission',
      'Push notifications and analytics',
      'Ongoing support after launch',
    ],
    outcome: 'An app your customers love using.',
  },
]
