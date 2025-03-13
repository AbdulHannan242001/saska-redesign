import React from 'react'
import Word from '../../components/Word'
import ProtfolioBanner from './PortfolioComponents/PortfolioBanner'
import Projects1 from './PortfolioComponents/Projects1'
import Projects2 from './PortfolioComponents/Projects2'
import Projects3 from './PortfolioComponents/Projects3'
import Projects4 from './PortfolioComponents/Projects4'
import Projects5 from './PortfolioComponents/Projects5'


const Portfolio = () => {
  return (
    <main className='w-full'>
        <ProtfolioBanner />
        <Word />
        <Projects1 />
        <Projects2 />
        <Projects3 />
        <Projects4 />
        <Projects5 />
    </main>
  )
}

export default Portfolio