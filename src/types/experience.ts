export type Experience = {
  id: string
  company: string
  position: string
  startYear: number
  endYear: number
  responsibilities: readonly string[]
  color: {
    timeline: string
    accent: string
  }
}
