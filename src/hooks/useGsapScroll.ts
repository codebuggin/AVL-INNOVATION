import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useFadeUp<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!ref.current) return undefined
    const tween = gsap.from(ref.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    })
    return () => {
      tween.kill()
    }
  }, [])

  return ref
}

export function staggerFadeUp(elements: gsap.TweenTarget, trigger: Element | string) {
  return gsap.from(elements, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: { trigger, start: 'top 80%' },
  })
}

export function scaleIn(element: gsap.TweenTarget, trigger: Element | string) {
  return gsap.from(element, {
    scale: 0.95,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: { trigger, start: 'top 80%' },
  })
}

export function animateCounter(element: HTMLElement, targetNumber: number) {
  const counter = { val: 0 }
  return gsap.to(counter, {
    val: targetNumber,
    duration: 1.5,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = String(Math.floor(counter.val)).padStart(2, '0')
    },
    scrollTrigger: { trigger: element, start: 'top 85%' },
  })
}
