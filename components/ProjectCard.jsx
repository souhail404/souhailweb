import Link from 'next/link'
import React from 'react'

const ProjectCard = ({image}) => {
  return (
    <Link href={``} className='group relative w-full aspect-square rounded border border-black overflow-hidden flex flex-col'>
        <img src={`${image}`} alt="" className='absolute h-full w-full group-hover:scale-105 max-w-full object-cover transition delay-150'/>
        <div className='flex flex-col justify-end h-full bg-gradient-to-t from-30% from-slate-950/90 to-slate-950/0 z-10 text-slate-300 px-2 py-4 translate-y-full group-hover:translate-y-0 transition delay-150'>
            <h4>E-univers Dashboard</h4>
            <p className='text-base mb-2'>Lorem ipsum dolor sit amet consectetur elit.</p>
            <div className='grid grid-cols-2 gap-2'>
                <Link href={``} className='cta-btn text-base h-9 text-blue-600 dark:text-slate-300 w-full'>Visit Project</Link>
                <Link href={``} className='cta-btn text-base h-9 bg-blue-600 border-blue-600 text-blue-50 w-full'>More Details</Link>
            </div>
        </div>
    </Link>
  )
}

export default ProjectCard