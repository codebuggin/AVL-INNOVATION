import CTAStrip from '../components/home/CTAStrip'
import FeatureBar from '../components/home/FeatureBar'
import Hero from '../components/home/Hero'
import InstagramSection from '../components/home/InstagramSection'
import PortfolioTeaser from '../components/home/PortfolioTeaser'
import ProcessTeaser from '../components/home/ProcessTeaser'
import ServicesTeaser from '../components/home/ServicesTeaser'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureBar />
      <ServicesTeaser />
      <InstagramSection />
      <PortfolioTeaser />
      <ProcessTeaser />
      <CTAStrip />
    </main>
  )
}
