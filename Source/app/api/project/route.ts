export const GET = async () => {
    try {
        // Test Projects Data
        const projects = [
            {
                id: 1,
                title: "LazinAround",
                summary: "A puzzle game that will put your laser puzzling and color theory skills to the test. Master the increasingly complex puzzles by manipulating multiple lasers into a single color.",
                workXpSummary: "Designed, developed and released 2D puzzle game, overseeing every single stage from concept to deployment while ensuring high-quality gameplay and user experience.",
                techTags:[
                    {
                        id: 1,
                        tag: "Python",
                    },
                    {
                        id: 2,
                        tag: "JavaScript",
                    },
                    {
                        id: 3,
                        tag: "CSS",
                    },
                    {
                        id: 4,
                        tag: "Godot",
                    },                    
                    {
                        id: 5,
                        tag: "Docker",
                    },
                    {
                        id: 6,
                        tag: "Jenkins",
                    },                                                                                                                 
                ],
                workSkills: [
                    {
                        id: 1,
                        skill: "Gameplay Design and Development",
                        desc: "Designed and implemented core mechanics and create 60 unique, engaging puzzles to challenge players."
                    },
                    {
                        id: 2,
                        skill: "Web Development and Marketing",
                        desc: "Build and launched a Vue.js website to showcase and promote the game effectively."
                    },
                    {
                        id: 3,
                        skill: "Automation and Deployment",
                        desc: "Setup an automated build system for streamlined packaging and deployable releases."
                    },
                    {
                        id: 4,
                        skill: "Release Management",
                        desc: "Managed game releases on itch.io, including updates, bug fixes and player feedback for continuous improvement."
                    },
                    {
                        id: 5,
                        skill: "Version Control",
                        desc: "Utilized git for efficient project source code management and collaboration."
                    },
                    {
                        id: 6,
                        skill: "Technical Proficiency",
                        desc: "Gained hands-on experience with Godot, Python, JavaScript, CSS, Jenkins, Docker and Ubuntu."
                    },
                    {
                        id: 7,
                        skill: "Customer Relations and Marketing",
                        desc: "Interacted with payers and managed marketing efforts to drive engagement and visibility."
                    },                                                                                                                          
                ],
                imageCapsule: "/assets/images/projects/LazinAroundCapsule.png",
                imageGif: "https://lazinaround.com/img/game/RGBMCY.gif",
                websiteLink: "https://lazinaround.com/"
            },

            {
                id: 2,
                title: "Catboob (GGStream)",
                summary: "Catboob is a Material Design inspired .Net tool for displaying an overlay and playing an accomping sound when a hotkey combination is pressed.",
                workXpSummary: "Developed an open-source program to enable Twitch.tv streamers to enhance their streams by displaying overlay images and playing custom sounds via global hot-key combinations.",
                techTags:[
                    {
                        id: 1,
                        tag: "C#",
                    },
                    {
                        id: 2,
                        tag: "WPF",
                    },
                    {
                        id: 3,
                        tag: "UX / UI",
                    },                                                                                                                                     
                ],                
                workSkills: [
                    {
                        id: 1,
                        skill: "Key Functionality",
                        desc: "Implemented a system to detect global hot-key presses independent of the user’s active application, ensuring seamless usability during streaming."
                    },
                    {
                        id: 2,
                        skill: "User-Centered Design",
                        desc: "Collaborated with streamers to gather feedback and implement usability improvements, tailoring the application to meet their needs."
                    }, 
                    {
                        id: 3,
                        skill: "UI Design Excellence",
                        desc: "Designed an intuitive and visually appealing graphical user interface (GUI) following Material Design principles to enhance user experience."
                    },
                    {
                        id: 4,
                        skill: "Personal Initiative",
                        desc: "Built and maintained the project as a passion-driven side project during my free time."
                    },
                    {
                        id: 5,
                        skill: "Technical Stack",
                        desc: "Developed the application using C# and WPF, leveraging these technologies to create a polished and functional tool"
                    },                                                                                
                ],
                imageCapsule: "/assets/images/projects/Catboob-Capsule.png",
                imageGif: "https://raw.githubusercontent.com/Isrelo/Catboob/master/Images/CatboobPreview.gif",
                websiteLink: "https://github.com/Isrelo/Catboob",                
            },                   
        ];     
        
        return new Response(JSON.stringify(projects), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all projects!", { status: 500 })        
    }
}