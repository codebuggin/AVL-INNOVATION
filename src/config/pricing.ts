export interface PricingPackage {
  id: string
  name: string
  tagline: string
  priceINR: string
  priceUSD: string
  duration?: string
  features: string[]
  cta: string
  popular?: boolean
}

export const websitePackages: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For new businesses getting online.',
    priceINR: '₹20,000',
    priceUSD: '$500',
    duration: 'Delivered in 2–3 weeks',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form',
      'WhatsApp chat button',
      'Basic SEO setup',
      '1 month free support',
    ],
    cta: 'Get Started →',
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'For growing businesses that need more.',
    priceINR: '₹40,000',
    priceUSD: '$1,000',
    duration: 'Delivered in 3–5 weeks',
    features: [
      'Up to 10 pages',
      'Custom design & animations',
      'Booking or inquiry system',
      'WhatsApp & contact integrations',
      'Advanced SEO setup',
      'Admin panel or dashboard',
      '2 months free support',
    ],
    cta: 'Get Started →',
    popular: true,
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce',
    tagline: 'For businesses selling products online.',
    priceINR: '₹1,00,000',
    priceUSD: '$2,500',
    duration: 'Delivered in 6–8 weeks',
    features: [
      'Full ecommerce store',
      'Product management system',
      'Payment gateway (Razorpay/Stripe)',
      'Order management dashboard',
      'Inventory tracking',
      'Customer accounts',
      'Advanced SEO',
      '3 months free support',
    ],
    cta: 'Get Started →',
    popular: false,
  },
]

export const aiAddons: PricingPackage[] = [
  {
    id: 'website-chatbot',
    name: 'Website Chatbot',
    tagline: 'Add a smart chatbot to your website.',
    priceINR: '₹8,000',
    priceUSD: '$200',
    duration: 'One-time',
    features: [
      'Answers visitor questions automatically',
      'Captures leads 24/7',
      'WhatsApp or form handoff',
      'Trained on your business info',
      'Works on any device',
    ],
    cta: 'Add to My Package →',
    popular: false,
  },
  {
    id: 'conversational-ai',
    name: 'Conversational AI',
    tagline: 'Full AI assistant for your business.',
    priceINR: '₹15,000',
    priceUSD: '$400',
    duration: 'One-time',
    features: [
      'Everything in Website Chatbot',
      'Multi-language support',
      'Voice input support',
      'Deep business knowledge base',
      'Analytics dashboard',
      'Custom personality & tone',
    ],
    cta: 'Add to My Package →',
    popular: false,
  },
]

export const appPackages: PricingPackage[] = [
  {
    id: 'basic-app',
    name: 'Basic App',
    tagline: 'Simple app for your business.',
    priceINR: '₹60,000',
    priceUSD: '$1,500',
    duration: 'Delivered in 6–8 weeks',
    features: [
      'iOS + Android',
      'Up to 8 screens',
      'User login & profiles',
      'Push notifications',
      'Basic admin panel',
      '2 months free support',
    ],
    cta: 'Get Started →',
    popular: false,
  },
  {
    id: 'advanced-app',
    name: 'Advanced App',
    tagline: 'Feature-rich app for growing businesses.',
    priceINR: '₹1,20,000',
    priceUSD: '$3,000',
    duration: 'Delivered in 8–12 weeks',
    features: [
      'iOS + Android',
      'Unlimited screens',
      'Payment integration',
      'Real-time features',
      'Advanced admin dashboard',
      'API integrations',
      '3 months free support',
    ],
    cta: 'Get Started →',
    popular: true,
  },
]

export const maintenancePlans: PricingPackage[] = [
  {
    id: 'basic-care',
    name: 'Basic Care',
    tagline: '',
    priceINR: '₹2,000',
    priceUSD: '$50',
    duration: 'Per month',
    features: [
      'Monthly updates & fixes',
      'Security monitoring',
      'Uptime monitoring',
      '1 content update/month',
    ],
    cta: 'Get Started →',
    popular: false,
  },
  {
    id: 'standard-care',
    name: 'Standard Care',
    tagline: '',
    priceINR: '₹5,000',
    priceUSD: '$120',
    duration: 'Per month',
    features: [
      'Everything in Basic Care',
      'Performance optimization',
      '5 content updates/month',
      'Priority support',
      'Monthly report',
    ],
    cta: 'Get Started →',
    popular: false,
  },
  {
    id: 'premium-care',
    name: 'Premium Care',
    tagline: '',
    priceINR: '₹10,000',
    priceUSD: '$250',
    duration: 'Per month',
    features: [
      'Everything in Standard Care',
      'Unlimited content updates',
      'New feature additions',
      'Dedicated support',
      'Weekly reports',
    ],
    cta: 'Get Started →',
    popular: false,
  },
]
