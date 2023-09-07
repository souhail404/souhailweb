"use client";

import { AiOutlineClose } from 'react-icons/ai'
import { CiMenuBurger } from 'react-icons/ci'

const MobileMenuToggler = ({isMenuOpen , setIsMenuOpen}) => {
  return (
    <button type="button" className={`block sm:hidden header-icon z-30 aspect-square`} onClick={()=>setIsMenuOpen(!isMenuOpen)}>
        {
            isMenuOpen ?
            <AiOutlineClose />
            :
            <CiMenuBurger />
        }
    </button>
  )
}

export default MobileMenuToggler