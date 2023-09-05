import Link from "next/link";
import {HiOutlineArrowLongRight} from 'react-icons/hi2'

export default function About(){
    return(
        <section>
            <div className="mb-6">
                <h2>About Me.</h2>    
            </div>
            <div className="flex flex-col gap-12 relative p-4">
                <span className="w-px h-full absolute bg-slate-900 dark:bg-slate-300 top-0 left-0 opacity-25"></span>
                <div className="flex flex-col gap-2">
                    <h3> Professional Journey</h3>
                    <p>My journey into web development began <span className="important-word">in 2019</span> when I enrolled in the <span className="important-word">High School of Technology Meknes</span>, specializing in <span className="important-word">computer engineering</span>. During my time there, I delved into the fundamentals of algorithms and the core concepts of technology. In 2020, I made the decision to transition to the High School of Commerce and Management, but <span className="important-word">my passion for web development</span> never waned. Even though I changed my academic path, I continued to <span className="important-word">teach myself web development</span>. I'm a <span className="important-word">self-taught</span> web developer, driven by a deep curiosity for coding and a desire to <span className="important-word">bring ideas to life</span>. While my professional journey is still in its early stages, I'm actively building my skills and knowledge in web development. I believe in the power of self-directed learning and <span className="important-word">am eager to take on new challenges in the web development landscape.</span></p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3>Passion for Coding</h3>
                    <p>What truly excites me about web development and coding is the incredible ability it gives me to <span className="important-word">transform ideas into tangible, creative, and functional solutions.</span> It's like being an artist with a canvas, only my canvas is a screen, and the possibilities are limitless. The process of solving problems in web development is akin to solving puzzles or playing a challenging game that I'm deeply passionate about. It's the thrill of unraveling complexities and seeing a project come to life that fuels my enthusiasm.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3>Skills & Expertise</h3>
                    <p>I possess a versatile skill set in web development, with expertise in <span className="important-word">JavaScript</span>, <span className="important-word">HTML</span>, <span className="important-word">CSS</span>, <span className="important-word">React.js</span>, <span className="important-word">Next.js</span>, <span className="important-word">Tailwind CSS</span>, <span className="important-word">Git</span>, and proficiency in backend technologies like <span className="important-word">Node.js</span> and <span className="important-word">Express.js</span>. My knowledge is a result of dedicated learning, including courses on platforms like Coursera, Udemy, and self-study through blogs and documentation. I've translated this knowledge into practical experience, actively working on a range of projects that showcase my ability to create seamless web solutions. Additionally, I've contributed to the field as a freelancer, specializing in developing e-commerce landing pages for clients, demonstrating my proficiency in turning concepts into polished websites.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3>Projects and Achievements</h3>
                    <p>Ready to dive into the heart of my web development journey? Join me on a tour of my projects by <span className="important-word">clicking the link below.</span></p>
                    <Link className="text-lg lg:text-xl font-medium underline underline-offset-1 flex items-center" href={`/projects`}>Projects <HiOutlineArrowLongRight className="nav-icon ml-2" /></Link>
                </div>
            </div>
        </section>
    )
}
