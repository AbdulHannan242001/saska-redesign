import React from 'react'
import ArrowButton from '../../../components/ArrowButton'

const Card = ({title, description, media}) => {
  return (
    <main className='p-[40px] w-[500px] min-h-[500px] rounded-2xl shadow-xl flex flex-col gap-[54px] '>
        <div className='size-[72px] bg-[#E2E0E6] rounded-full'>
            <img src={media} alt="" />
        </div>
        <div>
            <h1 className='font-black text-4xl'>{title}</h1>
            <p>{description}</p>
        </div>
        <ArrowButton  text="Get Consultation"/>
    </main>
  )
}

export default Card