import React from 'react'
import Nav from '@/components/nav/Nav'
import Image from 'next/image'
import arrow from '@/images/icon-arrow-down.svg';

const Header = () => {
  return (
    <header className=' h-screen bg-[url("../images/desktop/image-header.jpg")] bg-cover flex flex-col  text-white '>
      <Nav />
      <section className='uppercase flex flex-col justify-center items-center pt-12 lg:gap-20'>
        <h1 className='md:text-lg lg:text-4xl tracking-widest font-bold'>We are creatives</h1>
        <Image src={arrow} alt='arrow image' />
      </section>
      <section className='flex flex-col items-center justify-normal pt-24'>
        
        
        
        <section>
          
        </section>
      </section>
    </header>
  )
}

export default Header