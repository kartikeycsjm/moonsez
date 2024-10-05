'use client'
import { useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const Header = () => {
  const [open, setOpen] = useState(false);
  const [laptop, setLaptop] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setLaptop(window.innerWidth >= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className='w-full h-[70px] flex justify-between
    items-center'>
      <Image className='ml-4 h-[50px] w-[110px]'
        src={'/Moonlogo.png'} width={300} height={50} quality={100}>

      </Image>
      {laptop ?
        <div className='flex justify-center items-center w-[70%] text-[10px]'>
          <Link onClick={() => setOpen(false)} href={'/'}
            className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
            hover:text-blue-950'>Home</Link>
          <hr />
          <Link onClick={() => setOpen(false)} href={'/'}
            className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
            hover:text-blue-950'>About</Link>
          <hr />
          <Link onClick={() => setOpen(false)} href={'/'}
            className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
            hover:text-blue-950'>Our Services</Link>
          <hr />
          <Link onClick={() => setOpen(false)} href={'/'}
            className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
            hover:text-blue-950'>Resources</Link>
          <hr />
          <Link onClick={() => setOpen(false)} href={'/'}
            className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
            hover:text-blue-950'>Certifications</Link>
          <hr />
          <Link onClick={() => setOpen(false)} href={'/career'}
            className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
            hover:text-blue-950'>Career</Link>
          <hr />
          <Link onClick={() => setOpen(false)} href={'/'}
            className='my-1 mx-4 text-[rgb(7,150,254)] 
        cursor-pointer hover:text-blue-950'>Events & Media</Link>
          <hr />
          <Link onClick={() => setOpen(false)} href={'/contact'}
            className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
            hover:text-blue-950'>Contact Us</Link>
          <hr />
          <Link onClick={() => setOpen(false)} href={'/client_login'}
            className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
            hover:text-blue-950'>Client Login</Link>
        </div> : <>
          <div className='w-[25px] cursor-pointer mr-4 bg-[rgb(7,150,254)] h-[27px] rounded-lg
      flex justify-center items-center
      hover:bg-black'>
            <Image onClick={() => setOpen(!open)}
              src={`${open ? '/close.png' : '/menu.png'}`} width={16} height={20}></Image>
          </div>
          <div className={`absolute top-[70px] w-full bg-white shadow-lg rounded-b-lg z-20
      flex justify-between flex-col text-[10px] overflow-hidden transition-all duration-300 ease-in-out
        ${open ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <Link onClick={() => setOpen(false)} href={'/'}
              className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
              hover:text-blue-950'>Home</Link>
            <hr />
            <Link onClick={() => setOpen(false)} href={'/'}
              className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
              hover:text-blue-950'>About</Link>
            <hr />
            <Link onClick={() => setOpen(false)} href={'/'}
              className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
              hover:text-blue-950'>Our Services</Link>
            <hr />
            <Link onClick={() => setOpen(false)} href={'/'}
              className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
              hover:text-blue-950'>Resources</Link>
            <hr />
            <Link onClick={() => setOpen(false)} href={'/'}
              className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
              hover:text-blue-950'>Certifications</Link>
            <hr />
            <Link onClick={() => setOpen(false)} href={'/career'}
              className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
              hover:text-blue-950'>Career</Link>
            <hr />
            <Link onClick={() => setOpen(false)} href={'/'}
              className='my-1 hover:text-blue-950 mx-4 text-[rgb(7,150,254)] 
        cursor-pointer'>Events & Media</Link>
            <hr />
            <Link onClick={() => setOpen(false)} href={'/contact'}
              className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
              hover:text-blue-950'>Contact Us</Link>
            <hr />
            <Link onClick={() => setOpen(false)} href={'/client_login'}
              className='my-1 mx-4 text-[rgb(7,150,254)] cursor-pointer
              hover:text-blue-950'>Client Login</Link>
          </div></>}

    </div>
  )
}

export default Header

