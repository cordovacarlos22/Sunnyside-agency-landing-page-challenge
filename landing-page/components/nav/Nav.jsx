import Link from 'next/link'
import React from 'react'
const nav = () => {
  return (
    <>
      <nav id='desktop-nav' className='hidden md:flex justify-between bg-transparent p-6'>
        <section>
          <Link href='#'>
            <h1>sunnyside</h1>
          </Link>
        </section>
        <section>
          <ul className='flex  gap-4'>
            <li>
              <Link href='#'>About</Link>
            </li>
            <li>
              <Link href='#'>Services</Link>
            </li>
            <li>
              <Link href='#'>Projects</Link>
            </li>
            <li>
              <Link href='#'>Contact</Link>
            </li>
          </ul>
        </section>
      </nav>
      <nav id='mobile-nav' className=' flex md:hidden'>
        <h1>MOBILE</h1>
      </nav>

    </>
  )
}

export default nav