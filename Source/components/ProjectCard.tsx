
interface ProjectCardProps{
    project: any,
    handleProjectClick: any,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, handleProjectClick }) => {
    return (
        <div className="py-6 w-full min-h-[350] md:min-h-[200px] break-inside-avoid rounded-[2vw] border-gray-300 bg-primary-nav-blue text-white brightness-150 bg-clip-padding backdrop-blur-lg backdrop-filter">
            <div className="w-full px-8 flex-center flex-col items-start">
                <div className="w-[300px] h-[200px] relative group">
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
                <h1 className="text-center px-4 py-4 font-semibold text-xl sm:text-2xl xl:text-4xl">{project.title}</h1>
                <hr className="pb-2 w-1/2 mx-auto border-t-1 border-solid rounded-sm" />
                
                {/* Summary */}
                <p className="py-4 min-h-[200] font-semibold text-lg">
                    {project.summary}
                </p>

                {/* View Project Button */}
                <a 
                    href={project.websiteLink}
                    target="_blank"                    
                    className="my-2 py-2 px-4 bg-primary-orange hover:brightness-75 text-white font-bold rounded"
                >
                    VIEW PROJECT
                </a>                    
                
                {/* Work Experience */}  
                {project.workXpSummary && (
                    <div className="mx-4 w-full">              
                        <h1 className="text-center py-4 font-semibold  text-xl sm:text-2xl xl:text-4xl">Work Experience</h1>
                        <hr className="pb-2 w-1/2 mx-auto border-t-1 border-solid rounded-sm" />

                        {/* Tech Tags */}
                        <div className="py-4 min-h-[100] flex flex-wrap justify-center items-center text-center text-wrap">
                            {project.techTags && (project.techTags.map((tag: any) => (
                                <span
                                    key={tag.id} 
                                    className="me-2 m-2 px-2.5 py-0.5 max-h-5 bg-gray-100 text-gray-800 text-xs font-medium rounded-sm dark:bg-gray-700 dark:text-gray-300">
                                    {tag.tag}
                                </span>
                            )))}
                        </div>

                        <p className="py-2 font-semibold text-lg">
                            {project.workXpSummary}
                        </p>

                        <ul className="py-2 px-4 text-medium list-disc sm:columns-2 sm:gap-12">
                            {project.workSkills && (project.workSkills.map((workSkill: any) => (
                                <li
                                    key={workSkill.id}
                                    className="pb-10"
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
