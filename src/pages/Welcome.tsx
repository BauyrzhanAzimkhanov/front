import React from 'react'
import Navbar from '../components/Navbar'
import HeroWelcome from '../components/HeroWelcome'
import WelcomeMain from '../components/WelcomeMain'

const Welcome: React.FC = () => {
  return (
    <div>
      <Navbar />

      <HeroWelcome />

      <WelcomeMain />
    </div>
  )
}

export default Welcome
