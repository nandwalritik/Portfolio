import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Particles from 'react-particles-js'
import Rotater from './Components/Rotater'
import "./App.css"
import Experience from './Components/Experience/Experience'
import Project from './Components/Projects/Project'
import Achievements from './Components/Achievements/Achievements'

const App = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            }
          },
          shape: {
            type: "star",
            stroke: {
              width: 6,
              color: "red"
            }
          }
        }}
      />
      <Rotater />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Achievements />
    </>
  )
}
export default App;