"use client"
import React from 'react'
import ProjectCard from './ProjectCard'
import projectsData from '@/public/data/projects.json'

const ProjectsListing = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {
        projectsData.map((project, index) =>{
          return (
            <ProjectCard image={project.image} title={project.name} technologies={project.technologies} aboutProject={`/${project.slug}?i=${index}`} projectLink={project.projectLink} />
          )
        })
      }
    </div>
  )
} 

export default ProjectsListing