"use client";

import React, { useState } from 'react'
import MobileMenu from "./MobileMenu"
import MobileMenuToggler from "./MobileMenuToggler"
import Link from "next/link"
import ThemeToggler from "./ThemeToggler"

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className="flex items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="hidden sm:flex items-center gap-4 sm:gap-6 lg:gap-12">
                <Link className="header-link" href={`/about`}>about</Link>
                <Link className="header-link" href={`/projects`}>projects</Link>
                <Link className="header-link" href={`/blog`}>blog</Link>
                <Link className="header-link" href={`/contact`}>contacts</Link>
            </div>
            <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
            <ThemeToggler />
            <MobileMenuToggler setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </nav>
    )
}

export default Nav