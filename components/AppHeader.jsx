import Link from "next/link"
import { CiMenuBurger} from 'react-icons/ci'
import ThemeToggler from "./ThemeToggler"
import Logo from "./logo"
const AppHeader = () => {
  return (
    <header className="flex items-center justify-between pt-8 sm:pt-12 tall:pt-12">
        <Logo />
        <nav className="flex items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="hidden sm:flex items-center gap-4 sm:gap-6 lg:gap-12">
                <Link className="header-link" href={`/about`}>about</Link>
                <Link className="header-link" href={`/projects`}>projects</Link>
                <Link className="header-link" href={`/blog`}>blog</Link>
                <Link className="header-link" href={`/contact`}>contacts</Link>
            </div>
            <button type="button" className="block sm:hidden header-icon">
                <CiMenuBurger />
            </button>
            <ThemeToggler />
        </nav>
    </header>
  )
}

export default AppHeader