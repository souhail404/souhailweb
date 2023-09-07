import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function Projects(){
    return(
        <section>
            <div className="mb-6">
                <h2>Projects.</h2>    
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <ProjectCard image={'media/project1.png'} />
                <ProjectCard image={'media/project2.png'} />
                <ProjectCard image={'media/project3.png'} />
                <ProjectCard image={'media/project4.png'} />
                <ProjectCard image={'media/project5.png'} />
            </div>
        </section>
    )
}
