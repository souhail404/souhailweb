import Link from "next/link"
import {MdOutlineDarkMode, MdOutlineMenu} from 'react-icons/md'
const AppHeader = () => {
  return (
    <header className="flex items-center justify-between pt-6 sm:pt-12">
        <Link href={`/`} className="logo">
            <img src="/icon-black.png" alt="logo" className="w-full h-full object-contain" />
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6 lg:gap-12">
            <div className="hidden sm:flex items-center gap-4 lg:gap-8">
                <Link className="header-link" href={`/about`}>about</Link>
                <Link className="header-link" href={`/projects`}>projects</Link>
                <Link className="header-link" href={`blog`}>blog</Link>
                <Link className="header-link" href={`contact`}>contacts</Link>
            </div>
            <button type="button" className="block sm:hidden darkmode-toggler">
                <MdOutlineMenu />
            </button>
            <button type="button" className="darkmode-toggler">
                <MdOutlineDarkMode />
            </button>
        </nav>
    </header>
  )
}

export default AppHeader