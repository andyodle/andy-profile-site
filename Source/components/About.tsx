const About = () => {

    return (
        <section 
            id="about"
            className="w-full py-4 flex-center flex-col text-primary-blue scroll-mt-10">

            <h1 className="text-center font-semibold text-4xl py-4">ABOUT ME</h1>

            <hr className="py-2 w-1/2 mx-auto border-t-4 border-solid rounded-sm" />

            <div
                className="flex sm:columns-2 sm:gap-6 lg:flex-col"
            >
                <div className="flex-1 py-4 mx-6 font-semibold text-lg basis-1/2">
                    <p className="pb-2">
                        16+ years of experience as a software engineer, specializeing in 
                        designing, developing and optimizing software solutions. 
                        Focusing on creating tools and applications that streamline and improve user workflows. 
                        That enable users to spend more time on their core tasks. 
                    </p>
                    <p className="py-2">
                        I'm here to help create new tools and applications that enable better user experiences. 
                        Always looking for opportunities to solve interesting problems in the software engineering industry. 
                    </p>                    
                </div>

                <div className="py-2 px-4 font-semibold text-lg basis-1/2">

                    <ul className="mx-6 list-disc">

                        <li className="py-2">
                            <span>Extensive experience with varried development environments including Windows, Visual Studio and Visual Studio Code.</span>
                        </li>

                        <li className="py-2">
                            <span>Have worked with various Linux distributions such as Ubuntu, RedHat and Fedora.</span>
                        </li>

                        <li className="py-2">
                            <span>Strong in Python, C# and Perl.</span>
                        </li> 

                        <li className="py-2">
                            <span>Famiular with Javascript, TypeScript, TailwindCSS, CSS, HTML, Next.js, Vue.js and other web technologies.</span>
                        </li>                        

                        <li className="py-2">
                            <span>BS Software Engineering from Oregon Institute of Technology</span>
                        </li>                        

                        <li className="py-2">
                            <span>Eager to learn new technologies and tools.</span>
                        </li>                                                                                   
                    </ul>
                </div>
            </div>            

        </section>
    )
}

export default About