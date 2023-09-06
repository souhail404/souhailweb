"use client";

import Link from 'next/link';
import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const MobileMenu = ({isMenuOpen , setIsMenuOpen}) => {
  return (
    <div className={`fixed inset-0 w-full h-screen bg-blue-50 dark:bg-gray-950 z-10 ${isMenuOpen ? 'flex flex-col' : 'hidden'} items-center justify-evenly`}>
      <div className='flex flex-col items-center gap-6'>
        <Link className="" href={`/`} onClick={()=>setIsMenuOpen(false)}><h2>home.</h2></Link>
        <Link className="" href={`/about`} onClick={()=>setIsMenuOpen(false)}><h2>about.</h2></Link>
        <Link className="" href={`/projects`} onClick={()=>setIsMenuOpen(false)}><h2>projects.</h2></Link>
        <Link className="" href={`/blog`} onClick={()=>setIsMenuOpen(false)}><h2>blog.</h2></Link>
        <Link className="" href={`/contact`} onClick={()=>setIsMenuOpen(false)}><h2>contacts.</h2></Link>
      </div>
      <div className='flex items-center w-full justify-evenly'>
        <Link onClick={()=>setIsMenuOpen(false)} href={`https://github.com/souhail404`} className="text-3xl"><AiOutlineGithub /></Link>
        <Link onClick={()=>setIsMenuOpen(false)} href={`https://www.linkedin.com/in/souhail-el-abbouyi-075169217/`} className="text-3xl"><AiFillLinkedin /></Link>
        <Link onClick={()=>setIsMenuOpen(false)} href={`https://www.instagram.com/souhailweb/`} className="text-3xl"><AiOutlineInstagram /></Link>
        <Link onClick={()=>setIsMenuOpen(false)} href={`https://twitter.com/SouhailDev`} className="text-3xl"><AiOutlineTwitter /></Link>
      </div>
    </div>
  )
}

export default MobileMenu