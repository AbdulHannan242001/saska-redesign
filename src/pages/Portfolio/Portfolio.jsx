import React from 'react'
import ProtfolioBanner from './PortfolioComponents/PortfolioBanner'
import { Projects } from './PortfolioComponents/Projects'


const Portfolio = () => {
  return (
    <main>
        <ProtfolioBanner />
        <Projects />
    </main>
  )
}

export default Portfolio