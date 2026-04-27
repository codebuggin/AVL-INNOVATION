import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from './Footer'
import Navbar from './Navbar'
import WhatsAppFAB from './WhatsAppFAB'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    window.__lenis?.scrollTo(0, { immediate: true })
    window.setTimeout(() => ScrollTrigger.refresh(), 100)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
