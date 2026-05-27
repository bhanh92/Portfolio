import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Particles from './components/Particles'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <Particles />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}

export default App
