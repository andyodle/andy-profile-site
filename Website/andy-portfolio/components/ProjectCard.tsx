import Image from 'next/image';

const ProjectCard = ({ project, handleProjectClick }) => {
    return (
        <div className="p-6 pb-4 w-full min-h-[350] flex-1 break-inside-avoid rounded-[2vw] border-gray-300 bg-primary-nav-blue text-white brightness-150 bg-clip-padding backdrop-blur-lg backdrop-filter md:w-[360px] md:min-h-[400px]">
            <div className="flex-center flex-col justify-between items-start gap-5">
                <div>
                    {project.projectImage && (
                        <img 
                            src={project.projectImage}
                            alt="Project Image"
                            width={400}
                            height={200}
                            className="object-contain"                        
                        />
                    )}
                </div>

                <h1 className="text-center font-semibold text-4xl py-4">{project.projectTitle}</h1>

                <p className="py-4 mx-6 font-semibold text-lg">
                    {project.projectDesc}
                </p>                

            </div>           
        </div>
    )
}

export default ProjectCard
