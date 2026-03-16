'use client'
import { useState, useEffect } from 'react'

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent | TouchEvent) => {
      try {
        const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX
        const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY
        setPosition({ x: clientX || 0, y: clientY || 0 })
        setIsVisible(true)
      } catch (error) {
        console.warn('Cursor tracking error:', error)
      }
    }

    const handleLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('touchmove', updatePosition)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('touchend', handleLeave)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('touchmove', updatePosition)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('touchend', handleLeave)
    }
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-50 w-6 h-6 bg-orange-500/30 rounded-full blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: position.x - 12,
        top: position.y - 12,
        transform: 'translate3d(0, 0, 0)'
      }}
    />
  )
}