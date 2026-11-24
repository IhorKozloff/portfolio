# Portfolio — Agent Instructions

## Project Goal
- Build a professional developer portfolio presenting full-stack skills, work experience, and selected projects.
- Use English for all public-facing content.
- Keep the portfolio focused, easy to navigate, and suitable for recruiters.
- This is a public website. No authentication, backend, or database is required.

## Tech Stack
- React and TypeScript
- Vite
- Tailwind CSS
- Existing UI components and Lucide icons, if available

## Development Rules
- Follow the existing project architecture and conventions.
- Keep components small, reusable, and strongly typed.
- Separate portfolio content from presentation where practical.
- Use existing components before creating new ones.
- Avoid unnecessary dependencies, state, effects, and abstractions.
- Do not modify unrelated files or functionality.

## UI and Design
- All UI must be responsive down to 320px viewport width.
- Use mobile-first responsive design and avoid horizontal overflow.
- Maintain accessible contrast, semantic HTML, and visible keyboard focus.
- Provide meaningful alternative text for informative images.
- Support reduced-motion preferences for animations.
- Follow the approved design system and maintain consistent typography, spacing, and colors.
- Prioritize readability, clear visual hierarchy, and project presentation over decorative effects.
- Do not introduce or change the global theme without explicit approval.
- Optimize images and avoid unnecessary animation or large assets.

## Content and Safety
- Do not invent work experience, skills, project features, metrics, or achievements.
- Use only provided or verified project descriptions, screenshots, and links.
- Do not create links to nonexistent pages or unavailable project demos.
- Do not introduce authentication, backend services, or databases without explicit approval.
- Do not install dependencies without explicit approval.
- Never expose secrets, credentials, private SSH keys, or private personal information.
- Do not perform destructive file operations without explicit approval.

## Verification
- Run available lint, TypeScript, and production build checks after code changes.
- Run relevant existing tests when available.
- For UI changes, verify responsive layout, keyboard navigation, and relevant links when possible.
- Report errors and warnings separately.
- Summarize modified files and checks performed.
- Clearly state what was not verified.
- Do not create Git commits or push changes unless explicitly requested.

## Communication
- Explain architectural decisions briefly.
- For larger tasks, propose a plan before implementation.
- Keep changes focused on the requested task.
- Ask for clarification when requirements are ambiguous or changes could affect existing functionality.
