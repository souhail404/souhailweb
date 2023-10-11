"use client";
import Link from 'next/link'

const ProjectCard = ({image, title, technologies, projectLink, aboutProject}) => {
  return (
    <div className='group relative w-full aspect-square rounded border border-slate-300 overflow-hidden flex flex-col'>
        <img src={`${image}`} alt="" className='absolute h-full w-full group-hover:scale-105 max-w-full object-cover transition delay-150'/>
        <div className='flex flex-col justify-end h-full bg-gradient-to-t from-20% from-slate-950/70 to-slate-950/0  z-10 text-slate-300 px-2 py-4 md:translate-y-full group-hover:translate-y-0 transition delay-150'>
            <h4>{title}</h4>
            <p className='text-base mb-2'>{technologies}</p>
            <div className='grid grid-cols-2 gap-2'>
                <Link href={`${projectLink}`} target="_blank" className='cta-btn text-base h-8 text-slate-300 border-slate-300 w-full'>Visit Project</Link> 
                <Link href={`projects/${aboutProject}`} className='cta-btn text-base h-8 bg-blue-600 border-blue-600 text-blue-50 w-full'>More Details</Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard