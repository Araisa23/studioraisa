'use client'

import { useState, type FormEvent } from 'react'
import { Mail, FileText, Send, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { contact } from '@/lib/portfolio-data'

const channels = [
  { key: 'email', label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { key: 'linkedin', label: 'LinkedIn', value: 'Connect on LinkedIn', href: contact.linkedin, icon: LinkedinIcon },
  { key: 'github', label: 'GitHub', value: 'See my code', href: contact.github, icon: GithubIcon },
  { key: 'instagram', label: 'Instagram', value: 'Design updates', href: contact.instagram, icon: InstagramIcon },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        index="08"
        eyebrow="Contact"
        title="Let's work together."
        description={contact.workingTogether}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Channels */}
        <Reveal className="space-y-3">
          {channels.map((c) => {
            const disabled = !c.href || c.href === '#'
            const Icon = c.icon
            const inner = (
              <>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{c.label}</span>
                  <span className="block truncate text-sm text-muted-foreground">{c.value}</span>
                </span>
                {!disabled && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
              </>
            )
            return disabled ? (
              <div
                key={c.key}
                className="flex items-center gap-4 rounded-xl border border-dashed border-border bg-card p-4 opacity-70"
              >
                {inner}
              </div>
            ) : (
              <a
                key={c.key}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-secondary/40"
              >
                {inner}
              </a>
            )
          })}

          <a
            href={contact.cvUrl}
            className="flex items-center gap-4 rounded-xl border border-border bg-foreground p-4 text-background transition-opacity hover:opacity-90"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/15">
              <FileText className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold">Download CV</span>
              <span className="block text-sm text-background/70">Resume terbaru (PDF)</span>
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        {/* Form */}
        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Nama Anda" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Ceritakan peluang atau proyek yang Anda maksud…"
                className="w-full resize-y rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Send message
            </button>
            {sent && (
              <p className="mt-3 text-sm text-muted-foreground" role="status">
                Membuka aplikasi email Anda… Jika tidak terbuka, kirim langsung ke{' '}
                <span className="font-medium text-foreground">{contact.email}</span>.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
