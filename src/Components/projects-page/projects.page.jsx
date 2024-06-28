import React from 'react';
import { ProjectsCollection } from '../../assets/collections/projects.collection';
import { Link } from 'react-router-dom';

export const ProjectsPage = () => {
  return (
    <section>
      <div className="projects-page">
        <ul className="projects-wrapper">
          {ProjectsCollection.map((project, index) => {
            return (
              <li key={index} className="project-plate">
                <Link to={project.path}>
                  {project.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
