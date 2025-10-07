import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const Cocktail = React.lazy(() => import('./components/Cocktail'));
const About = React.lazy(() => import('./components/About'));
const Art = React.lazy(() => import('./components/Art'));
const Menu = React.lazy(() => import('./components/Menu'));
const Contact = React.lazy(() => import('./components/Contact'));

gsap.registerPlugin(ScrollTrigger,SplitText);


const App = () => {
  return (
    <React.Suspense fallback={<div style={{textAlign:'center',padding:'2rem'}}>Loading...</div>}>
      <main>
        <Navbar/>
        <Hero/>
        <Cocktail/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
      </main>
    </React.Suspense>
  )
}

export default App