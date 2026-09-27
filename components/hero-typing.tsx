'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/lib/portfolio-data'

const HERO_ROLES = profile.roles.slice(0, 4)

export function HeroTyping() {
  const roles = HERO_ROLES
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex] ?? ''
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1))
          } else {
            setDeleting(true)
          }
        } else if (text.length > 0) {
          setText(current.slice(0, text.length - 1))
        } else {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      },
      deleting ? 45 : text.length === current.length ? 2000 : 90,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return (
    <span className="text-gradient-neon">
      {text}
      <span className="animate-pulse text-primary">|</span>
    </span>
  )
}
