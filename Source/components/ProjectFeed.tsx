"use client";

import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

interface ProjectCardListProps{
    data: any,
    handleProjectClick: any,
}

const ProjectCardList: React.FC<ProjectCardListProps> = ({ data, handleProjectClick }) => {
    return (
        <div className="mt-4 px-4 py-8 space-y-6 sm:columns-2 xl:columns-3">
            {data.map((tempProject: any) => (
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
            className="py-4 w-screen flex flex-col bg-primary-blue text-white scroll-mt-20">

            <h1 className="text-center font-semibold text-4xl py-4">Project Showcase</h1>

            <hr className="py-2 w-1/2 mx-auto border-t-4 border-solid rounded-sm" />            
            
            <div className="flex justify-around">
                <ProjectCardList 
                    data={projects}
                    handleProjectClick={() => {}}
                />
            </div>
            
        </section>
    )
}

export default ProjectFeed