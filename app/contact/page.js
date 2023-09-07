import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";


export default function Projects(){
    return(
        <section>
            <div className="mb-6">
                <h2>Contacts.</h2>    
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-12">
                <div className="flex flex-col lg:col-span-3 gap-12 relative p-4">
                    <span className="w-px h-full absolute bg-slate-900 dark:bg-slate-300 top-0 left-0 opacity-25"></span>
                    <div className="flex flex-col gap-6">
                        <h3 className="flex items-center">Get in Touch</h3>
                        <form action="" className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="user-name">Name :</label>
                                <input type="text" id="user-name" name="user-name" placeholder="What your name ?"  className="border border-slate-400 bg-transparent p-1 outline-1 outline-blue-600 placeholder:dark:text-slate-50/30 h-10 text-lg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="subject">Subject :</label> 
                                <input type="text" id="subject" name="subject" placeholder="About what you wanna text me ?"  className="border border-slate-400 bg-transparent p-1 outline-1 outline-blue-600 placeholder:dark:text-slate-50/30 h-10 text-lg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message">Message :</label>
                                <textarea  placeholder="What are the details ?" className="border border-slate-400 bg-transparent p-1 outline-1 outline-blue-600 placeholder:dark:text-slate-50/30 resize-none text-lg" name="message" id="message" cols="30" rows="4"></textarea>
                            </div>
                            <div>
                                <button type="button" className="cta-btn w-full bg-blue-600 border-blue-600 text-blue-50 dark:border-blue-600 hover:bg-blue-500">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col lg:col-span-2 gap-12 relative p-4">
                    <span className="w-px h-full absolute bg-slate-900 dark:bg-slate-300 top-0 left-0 opacity-25"></span>
                    <div className="flex flex-col gap-6 lg:gap-12">
                        <h3 className="flex items-center">Find Me Online</h3>
                        <div className="flex flex-col gap-6 lg:gap-12">
                            <div className="group flex text-2xl gap-4">
                                <BiLogoGmail className="group-hover:text-blue-600" />
                                <p>elabbouyisouhail@gmail.com</p>
                            </div>
                            <Link href={`https://github.com/souhail404`} className="group flex text-2xl gap-4">
                                <AiOutlineGithub className="group-hover:text-blue-600" />
                                <p>souhail 404</p>
                            </Link>
                            <Link href={`https://www.linkedin.com/in/souhail-el-abbouyi-075169217/`} className="group flex text-2xl gap-4">
                                <AiFillLinkedin className="group-hover:text-blue-600" />
                                <p>souhail el abbouyi</p>
                            </Link>
                            <Link href={`https://www.instagram.com/souhailweb/`} className="group flex text-2xl gap-4">
                                <AiOutlineInstagram className="group-hover:text-blue-600" />
                                <p>souhailweb</p>
                            </Link>
                            <Link href={`https://twitter.com/SouhailDev`} className="group flex text-2xl gap-4">
                                <AiOutlineTwitter className="group-hover:text-blue-600" />
                                <p>souhailDev</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
