import type { CSSProperties } from 'react'
import type { Experience } from '../../types/experience'

export function ExperienceLedger({ entries }: { entries: readonly Experience[] }) {
  return (
    <div className="overflow-hidden rounded-card border border-border bg-surface">
      <table role="table" className="block w-full table-fixed border-collapse text-left sm:table">
        <caption className="sr-only">Professional experience</caption>
        <thead role="rowgroup" className="sr-only bg-elevated-surface sm:not-sr-only">
          <tr role="row" className="text-xs font-semibold tracking-wider text-indigo-300 uppercase">
            <th role="columnheader" id="experience-period" scope="col" className="w-[26%] px-4 py-3.5 lg:px-5 lg:py-4">Period</th>
            <th role="columnheader" id="experience-company" scope="col" className="w-[29%] px-4 py-3.5 lg:px-5 lg:py-4">Company</th>
            <th role="columnheader" id="experience-position" scope="col" className="w-[45%] px-4 py-3.5 lg:px-5 lg:py-4">Position</th>
          </tr>
        </thead>
        {entries.map(({ id, company, position, startYear, endYear, responsibilities, color }) => (
          <tbody
            key={id}
            role="rowgroup"
            className="block border-t border-border first-of-type:border-t-0 sm:table-row-group sm:first-of-type:border-t"
            style={{ '--experience-accent': color.accent } as CSSProperties}
          >
            <tr role="row" className="grid gap-1.5 px-4 py-4 sm:table-row">
              <td role="cell" headers="experience-period" className="text-sm text-text-secondary tabular-nums sm:px-4 sm:py-4 lg:px-5 lg:py-5">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-(--experience-accent)" />
                  {startYear} — {endYear}
                </span>
              </td>
              <td role="cell" headers="experience-company" className="font-bold sm:px-4 sm:py-4 lg:px-5 lg:py-5 lg:text-lg">
                {company}
              </td>
              <td role="cell" headers="experience-position" className="text-sm font-semibold sm:px-4 sm:py-4 lg:px-5 lg:py-5 lg:text-base">
                {position}
              </td>
            </tr>
            <tr role="row" className="block sm:table-row">
              <td role="cell" colSpan={3} className="block border-t border-border/60 px-4 py-5 sm:table-cell sm:p-6 lg:p-7">
                <h3 className="mb-3 text-xs font-semibold tracking-wider text-[#8490AF] uppercase">Responsibilities</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-[1.6] text-text-secondary marker:text-(--experience-accent) lg:text-base">
                  {responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                </ul>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
