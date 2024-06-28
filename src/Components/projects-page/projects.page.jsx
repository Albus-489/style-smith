import React from 'react';
import { ProjectsCollection } from '../../assets/collections/projects.collection';
import { Link } from 'react-router-dom';

export const ProjectsPage = () => {
  return (
    <section>
      <div className="projects-page mx-10 md:mx-18 lg:mx-24 xl:mx-24">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {ProjectsCollection.map((project, index) => {
            return (
              <li key={index} className="p-4 transition-all ease-in-out hover:bg-stone-600 shadow-lg cursor-pointer select-none text-center bg-stone-700 rounded-lg">
                <Link to={project.path} className="text-white">
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
