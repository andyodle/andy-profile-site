import Image from 'next/image';

const ProjectCard = ({ project, handleProjectClick }) => {
    return (
        <div className="p-6 pb-4 w-full min-h-[350] flex-1 break-inside-avoid rounded-[2vw] border-gray-300 bg-primary-nav-blue text-white brightness-150 bg-clip-padding backdrop-blur-lg backdrop-filter md:min-w-[400px] md:min-h-[400px]">
            <a 
                href={project.websiteLink}
                target="_blank"                    
                className="pl-4 pr-2"
            >
                <div className="flex-center flex-col justify-between items-start gap-5">
                    <div>
                        {project.imageCapsule && (
                            <img 
                                src={project.imageCapsule}
                                alt="Project Image"
                                width={400}
                                height={200}
                                className="object-contain"                        
                            />
                        )}
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-center py-2 font-semibold text-4xl">{project.title}</h1>
                    <hr className="w-1/2 mx-auto border-t-1 border-solid rounded-sm" />
                    
                    {/* Summary */}
                    <p className="py-2 mx-6 font-semibold text-lg">
                        {project.summary}
                    </p> 
                    
                    {/* Work Experience */}  
                    {project.workXpSummary && (
                        <div>              
                            <h1 className="text-center py-2 font-semibold text-4xl">Work Experience</h1>
                            <hr className="w-1/2 mx-auto border-t-1 border-solid rounded-sm" />

                            <p className="py-2 mx-6 font-semibold text-lg">
                                {project.workXpSummary}
                            </p>

                            <ul className="py-2 px-4 mx-6 text-medium list-disc sm:columns-2 sm:gap-6">
                                {project.workSkills && (project.workSkills.map((workSkill) => (
                                    <li
                                        key={workSkill.id}
                                        className="py-2"
                                    >
                                        <span className="font-bold">{workSkill.skill}</span>
                                        <br /> 
                                        {workSkill.desc}
                                    </li>                        
                                )))}                    
                            </ul>
                        </div> 
                    )}           

                </div>
            </a>           
        </div>
    )
}

export default ProjectCard
