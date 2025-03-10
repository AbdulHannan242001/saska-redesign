import React from 'react'
import ServiceBanner from './ServiceComponents/ServiceBanner'
import Services from './ServiceComponents/Services'
import Process from './ServiceComponents/Process'

const Service = () => {
  return (
    <main>
      <ServiceBanner />
      <Services />
      <Process />
    </main>
  )
}

export default Service