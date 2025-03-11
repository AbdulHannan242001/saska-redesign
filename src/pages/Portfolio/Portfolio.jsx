import React from 'react'
import ProtfolioBanner from './PortfolioComponents/PortfolioBanner'
import Projects1 from './PortfolioComponents/Projects1'
import Projects2 from './PortfolioComponents/Projects2'
import Projects3 from './PortfolioComponents/Projects3'


const Portfolio = () => {
  return (
    <main className='w-full'>
        <ProtfolioBanner />
        <Projects1 />
        <Projects2 />
        <Projects3 />
    </main>
  )
}

export default Portfolio