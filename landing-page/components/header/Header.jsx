import React from 'react'
import Nav from '@/components/nav/Nav'
import Image from 'next/image'
import arrow from '@/images/icon-arrow-down.svg';

const Header = () => {
  return (
    <header className=' h-screen bg-[url("../images/mobile/image-header.jpg")] md:bg-[url("../images/desktop/image-header.jpg")] bg-cover bg-center bg-no-repeat  flex flex-col  text-white   '>
      <Nav />
      <h1 className=' justify-center text-center items-center text-4xl tracking-widest font-bold'>We are creatives</h1>
      <section className='flex flex-col'>
        <Image className='  ' src={arrow} alt='arrow image' />
      </section> 
    </header>
  )
}

export default Header