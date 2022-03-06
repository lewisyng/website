import { useState } from 'react'
import Landing from '../components/Landing/Landing'
import Projects from '../components/Projects/Projects'
import PageWrapper from '../components/shared/PageWrapper/PageWrapper'

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <PageWrapper menuOpen={isMenuOpen}>
      <Landing handleMenuClick={handleMenuClick} />
      <Projects />
    </PageWrapper>
  )
}

export default Home
