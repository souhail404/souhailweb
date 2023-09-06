import Logo from "./Logo" 
import Nav from "./Nav"

const AppHeader = () => {
  return (
    <header className="flex items-center justify-between pt-8 sm:pt-12 tall:pt-12">
        <Logo />
        <Nav />
    </header>
  )
}

export default AppHeader