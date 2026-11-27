import { Header } from './components/layout/Header'
import { FeaturedProjects } from './components/sections/FeaturedProjects'
import { Hero } from './components/sections/Hero'
import { TechnicalSkills } from './components/sections/TechnicalSkills'
import { SectionDivider } from './components/ui/SectionDivider'

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <TechnicalSkills />
        <SectionDivider />
        <FeaturedProjects />
      </main>
    </div>
  )
}

export default App
