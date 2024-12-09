import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import React from 'react'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <About />
    </main>
  )
}
export default App
