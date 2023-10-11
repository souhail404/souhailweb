import projectsData from '@/public/data/projects.json'
import Link from 'next/link';
import {AiOutlineArrowLeft} from "react-icons"
import { BsCircleFill } from 'react-icons/bs';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function ProjectDetails({params , searchParams}){
    const projectData = projectsData[searchParams.i];
    return(
        <>
            <section>
                <div className="mb-6">
                    <h2>{projectData.name}.</h2>    
                </div>
                <div className='flex my-11 justify-center'>
                    <img src={projectData.demoImg} alt="project-demo" className='max-w-xs' />
                </div>
                <div className="flex flex-col gap-12 relative p-4">
                    <span className="w-px h-full absolute bg-slate-900 dark:bg-slate-300 top-0 left-0 opacity-25"></span>
                    <div className="flex flex-col gap-2">
                        <h3 className="flex items-center"> <div className="text-xs mr-2"><BsCircleFill/></div>Description</h3>
                        <p>{projectData.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="flex items-center"><div className="text-xs mr-2"><BsCircleFill/></div>Technologies</h3>
                        <p>{projectData.technologies}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="flex items-center"><div className="text-xs mr-2"><BsCircleFill/></div>Links</h3>
                        <div>
                        {projectData.projectLink ? <Link href={projectData.projectLink} target='_blank' className='text-lg lg:text-xl font-medium underline underline-offset-1 flex items-center'>View Site <HiOutlineArrowLongRight className="nav-icon ml-2" /></Link> : null}
                        {
                            projectData.links?.map((link, index)=>{
                                return (<Link href={link.url} target='_blank' className='text-lg lg:text-xl font-medium underline underline-offset-1 flex items-center'>{link.label}<HiOutlineArrowLongRight className="nav-icon ml-2" /></Link>)
                            })
                        }
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
        
    )
}