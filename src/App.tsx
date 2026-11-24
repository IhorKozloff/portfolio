import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App
