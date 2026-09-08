import { CheckCircle2, XCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { testResults, testingNote } from '@/lib/portfolio-data'

function StatusBadge({ status }: { status: 'PASS' | 'FAILED' }) {
  const pass = status === 'PASS'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        pass
          ? 'bg-chart-3/15 text-chart-3'
          : 'bg-destructive/15 text-destructive'
      }`}
    >
      {pass ? <CheckCircle2 className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
      {status}
    </span>
  )
}

export function Testing() {
  return (
    <section id="testing" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          index="05"
          eyebrow="Software Testing"
          title="Testing with purpose"
          description={testingNote}
        />

        {/* Desktop table */}
        <Reveal className="mt-10 hidden overflow-hidden rounded-xl border border-border bg-card md:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/60 font-display text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 font-semibold">Feature</th>
                <th className="px-4 py-3 font-semibold">Test Scenario</th>
                <th className="px-4 py-3 font-semibold">Expected Result</th>
                <th className="px-4 py-3 font-semibold">Actual Result</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-0 align-top transition-colors hover:bg-secondary/40"
                >
                  <td className="px-4 py-3 font-medium">{row.feature}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.scenario}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.expected}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.actual}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-8 grid gap-3 md:hidden">
          {testResults.map((row, i) => (
            <Reveal key={i} delay={i * 60}>
              <article className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-semibold">{row.feature}</p>
                  <StatusBadge status={row.status} />
                </div>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">Scenario</dt>
                    <dd className="text-foreground/80">{row.scenario}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">Expected</dt>
                    <dd className="text-foreground/80">{row.expected}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">Actual</dt>
                    <dd className="text-foreground/80">{row.actual}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
