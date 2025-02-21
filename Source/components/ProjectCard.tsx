
interface ProjectCardProps{
    project: any,
    handleProjectClick: any,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, handleProjectClick }) => {
    return (
        <div className="p-6 pb-4 w-full min-h-[350] flex-1 break-inside-avoid rounded-[2vw] border-gray-300 bg-primary-nav-blue text-white brightness-150 bg-clip-padding backdrop-blur-lg backdrop-filter md:min-w-[400px] md:min-h-[400px]">
            <div className="flex-center flex-col justify-between items-start gap-5">
                <div className="w-[400px] h-[300px] relative group">
                    {project.imageCapsule && (
                        <img 
                            src={project.imageCapsule}
                            alt="Project Image"
                            className="w-full h-full object-fill transition-all duration-300 group-hover:opacity-0"                        
                        />
                    )}
                    {project.imageGif && (
                        <img 
                            src={project.imageGif}
                            alt="Project Gif Image"
                            className="w-full h-full absolute inset-0 object-fill opacity-0 group-hover:opacity-100 transition-opacity duration-300"                        
                        />
                    )}                        
                </div>
                
                {/* Title */}
                <h1 className="text-center py-2 font-semibold text-4xl">{project.title}</h1>
                <hr className="w-1/2 mx-auto border-t-1 border-solid rounded-sm" />
                
                {/* Summary */}
                <p className="py-2 mx-6 min-h-[175] font-semibold text-lg">
                    {project.summary}
                </p>

                {/* View Project Button */}
                <a 
                    href={project.websiteLink}
                    target="_blank"                    
                    className="bg-primary-orange hover:brightness-75 text-white font-bold py-2 px-4 rounded"
                >
                    VIEW PROJECT
                </a>                    
                
                {/* Work Experience */}  
                {project.workXpSummary && (
                    <div>              
                        <h1 className="text-center py-4 font-semibold text-4xl">Work Experience</h1>
                        <hr className="w-1/2 mx-auto border-t-1 border-solid rounded-sm" />

                        {/* Tech Tags */}
                        <div className="py-4 text-center">
                            {project.techTags && (project.techTags.map((tag: any) => (
                                <span
                                    key={tag.id} 
                                    className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                                    {tag.tag}
                                </span>
                            )))}
                        </div>

                        <p className="py-2 mx-6 font-semibold text-lg">
                            {project.workXpSummary}
                        </p>

                        <ul className="py-2 px-4 mx-6 text-medium list-disc sm:columns-2 sm:gap-6">
                            {project.workSkills && (project.workSkills.map((workSkill: any) => (
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
        </div>
    )
}

export default ProjectCard
