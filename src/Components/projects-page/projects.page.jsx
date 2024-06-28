import React from 'react'
import { ProjectsCollection } from '../../assets/collections/projects.collection'

export const ProjectsPage = () => {
  return (
    <section>
        <div className='projects-page'>
            {ProjectsCollection.map((project) => {
                return (
                    <div>{project.name}</div>
                )
            })}
        </div>
    </section>
  )
}
