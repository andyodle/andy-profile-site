"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';

const ProjectCardList = ({ data, handleProjectClick }) => {
    return (
        <div className="mt-4 mx-2 py-8 space-y-6 sm:columns-2 sm:gap-6 xl:columns-3">
            {data.map((tempProject) => (
                <ProjectCard 
                    key={tempProject.id}
                    project={tempProject}
                    handleProjectClick={handleProjectClick}                                       
                />
            ))}
        </div>
    )
}

const ProjectFeed = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/api/project');
            const data = await response.json(); 
            
            setProjects(data);
        } 

        fetchProjects();
    }, []);

    return (
        <section 
            id="projects"
            className="w-full py-4 flex-center flex-col bg-primary-blue text-white scroll-mt-10">

            <h1 className="text-center font-semibold text-4xl py-4">Project Showcase</h1>

            <hr className="py-2 w-1/2 mx-auto border-t-4 border-solid rounded-sm" />            

            <ProjectCardList 
                data={projects}
                handleProjectClick={() => {}}
            />
            
        </section>
    )
}

export default ProjectFeed