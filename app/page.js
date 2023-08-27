import Link from "next/link";
import {AiFillLinkedin, AiOutlineArrowRight, AiOutlineEllipsis, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'
export default function Home() {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <div className="flex flex-col sm:gap-4">
        <h1>Hi, I'm Souhail.</h1>
        <h1>I Build  Virtual Adventures.</h1>
      </div>
      <div className="flex flex-col gap-4">
        <p className="2xl:text-lg">Meet the mind behind the pixels – I'm Souhail El Abbouyi, a passionate navigator of the digital realm. Over the last two years, I've honed my skills as a self-taught web developer, all while pursuing my commerce and management master's degree. I've discovered my true calling in crafting virtual experiences that bridge the gap between code and creativity.</p>
        <p className="2xl:text-lg"> At 20, my journey began with a curious exploration of HTML, CSS, and JavaScript – where each line of code felt like a brushstroke on a digital canvas. Delving into the depths of the MERN stack and beyond, I've grown to build dynamic websites that seamlessly blend functionality with design.</p>
        {/* <p className="2xl:text-lg">anyways <Link href="" className="underline">let's build something together.</Link></p> */}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 my-4">
        {/* <Link className="cta-btn"  href={``}>About Me <AiOutlineEllipsis /> </Link> */}
        <Link className="cta-btn bg-black text-[#F8F7F2]"  href={``}>Let's Talk <AiOutlineArrowRight/></Link>
      </div>
      <div className="social-media-wrapper">
        <Link href={``} className="text-2xl sm:text-3xl"><AiOutlineGithub /></Link>
        <Link href={``} className="text-2xl sm:text-3xl"><AiFillLinkedin /></Link>
        <Link href={``} className="text-2xl sm:text-3xl"><AiOutlineInstagram /></Link>
        <Link href={``} className="text-2xl sm:text-3xl"><AiOutlineTwitter /></Link>
      </div>
    </section>
  )
}
