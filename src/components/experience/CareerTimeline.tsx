import type { Experience } from '../../types/experience'

export function CareerTimeline({ entries }: { entries: readonly Experience[] }) {
  if (!entries.length) return null

  const firstYear = Math.min(...entries.map(({ startYear }) => startYear))
  const lastYear = Math.max(...entries.map(({ endYear }) => endYear))
  const yearCount = lastYear - firstYear + 1
  const years = Array.from({ length: yearCount }, (_, index) => firstYear + index)
  const periods = [...entries].sort((a, b) => a.startYear - b.startYear)
  const gridTemplateColumns = `repeat(${yearCount}, minmax(0, 1fr))`

  return (
    <figure>
      <figcaption className="sr-only">Career timeline</figcaption>
      <ol className="sr-only">
        {periods.map(({ id, company, startYear, endYear }) => (
          <li key={id}>{company}, {startYear} — {endYear}</li>
        ))}
      </ol>
      <div aria-hidden="true">
        <div className="grid grid-rows-[auto_8px] gap-y-3 lg:grid-rows-[auto_10px] lg:gap-y-4" style={{ gridTemplateColumns }}>
          <div className="col-span-full col-start-1 row-start-2 rounded-full bg-elevated-surface" />
          {periods.map(({ id, company, startYear, endYear, color }) => {
            const gridColumn = `${startYear - firstYear + 1} / ${endYear - firstYear + 2}`

            return (
              <div key={id} className="row-span-2 row-start-1 grid grid-rows-subgrid" style={{ gridColumn }}>
                <span
                  className="self-end px-1 text-center text-xs font-semibold wrap-anywhere sm:text-sm lg:text-base"
                  style={{ color: color.accent }}
                >
                  {company}
                </span>
                <span className="mx-0.5 rounded-full" style={{ background: color.timeline }} />
              </div>
            )
          })}
        </div>
        <div className="relative mt-3 grid lg:mt-4" style={{ gridTemplateColumns }}>
          <div
            className="absolute top-3 h-px bg-border lg:top-4"
            style={{ insetInline: `${50 / yearCount}%` }}
          />
          {years.map((year) => (
            <div key={year} className="relative flex flex-col items-center text-sm text-text-secondary tabular-nums">
              <span className="h-3 w-px bg-border lg:h-4" />
              <span className="size-1.5 -translate-y-1/2 rounded-full bg-accent-light" />
              <span className="mt-2 lg:mt-3">{year}</span>
            </div>
          ))}
        </div>
      </div>
    </figure>
  )
}
