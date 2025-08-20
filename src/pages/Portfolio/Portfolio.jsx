import React from 'react'
import ProtfolioBanner from './PortfolioComponents/PortfolioBanner'
import Projects1 from './PortfolioComponents/Projects1'
import Projects2 from './PortfolioComponents/Projects2'
import Projects3 from './PortfolioComponents/Projects3'
import Projects4 from './PortfolioComponents/Projects4'
import Projects5 from './PortfolioComponents/Projects5'
import Projects6 from './PortfolioComponents/Projects6'
import Projects7 from './PortfolioComponents/Projects7'


const Portfolio = () => {
  return (
    <main className='w-full'>
        <ProtfolioBanner />
        <Projects7 />
        <Projects6 />
        <Projects3 />
        <Projects2 />
        <Projects5 />
        <Projects1 />
        <Projects4 />
    </main>
  )
}

export default Portfolio