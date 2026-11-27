import { projects } from '../../data/projects'
import { FeaturedProjectCard } from '../projects/FeaturedProjectCard'
import { ProjectCard } from '../projects/ProjectCard'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const featuredProjects = projects.filter((project) => project.featured)
const moreProjects = projects.filter((project) => !project.featured)

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 pb-12 sm:pb-16">
      <Container>
        <SectionHeading id="projects-heading" description="A selection of applications I've designed and developed.">
          Featured Projects
        </SectionHeading>
        <div className="grid gap-4 sm:gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} previewOnRight={index % 2 === 0} />
          ))}
        </div>
        <h3 className="mb-4 mt-8 text-xl font-semibold tracking-tight sm:mb-6 sm:mt-12 sm:text-2xl">More Projects</h3>
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {moreProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </Container>
    </section>
  )
}
