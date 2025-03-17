import React from 'react'
import ServiceBanner from './ServiceComponents/ServiceBanner'
import Services from './ServiceComponents/Services'
import Process from './ServiceComponents/Process'

const Service = () => {
  return (
    <main className='flex flex-col gap-[60px]'>
      <ServiceBanner />
      <Services />
      <Process />
    </main>
  )
}

export default Service