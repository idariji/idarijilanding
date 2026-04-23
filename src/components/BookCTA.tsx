'use client'

import React, { useState } from 'react'
import BookingModal from './BookingModal'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  as?: 'button' | 'div'
}

export default function BookCTA({ children, className, style, as: Tag = 'button' }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <BookingModal open={open} onClose={() => setOpen(false)} />
      <Tag
        onClick={() => setOpen(true)}
        className={className}
        style={style}
        {...(Tag === 'button' ? { type: 'button' } : {})}
      >
        {children}
      </Tag>
    </>
  )
}
