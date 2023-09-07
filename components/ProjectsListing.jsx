"use client"
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsListing = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <ProjectCard image={'media/project1.png'} title={`E-commerce Dashborad`} description={`React.js, Node.js, Express.js, MongoDB`} aboutProject={``} projectLink={``} />
        <ProjectCard image={'media/project2.png'} title={`E-commerce Store`} description={`React.js, Node.js, Express.js, MongoDB`} aboutProject={``} projectLink={``} />
        <ProjectCard image={'media/project3.png'} title={`REST API Server`} description={`Node.js, Express.js`} aboutProject={``} projectLink={``} />
        <ProjectCard image={'media/project4.png'} title={`Product Landing Page 1`} description={`javascript, HTML, CSS`} aboutProject={``} projectLink={``} />
        <ProjectCard image={'media/project5.png'} title={`Product Landing Page 2`} description={`javascript, HTML, CSS`} aboutProject={``} projectLink={``} />
    </div>
  )
}

export default ProjectsListing