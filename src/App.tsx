import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Process from './pages/Process'
import Services from './pages/Services'
import Work from './pages/Work'

function NotFound() {
  return (
    <main className="min-h-screen px-6 pt-40 text-center">
      <p className="font-display text-5xl font-extrabold">Page not found</p>
      <a href="/" className="mt-8 inline-block text-purple-light">Go home</a>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/process" element={<Process />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
