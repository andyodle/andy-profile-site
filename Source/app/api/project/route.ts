export const GET = async () => {
    try {
        // Test Projects Data
        const projects = [
            {
                id: 1,
                title: "LazinAround",
                summary: "A puzzle game that will put your laser puzzling and color theory skills to the test. Master the increasingly complex puzzles by manipulating multiple lasers into a single color.",
                workXpSummary: "Designed, developed and released 2D puzzle game, overseeing every single stage from concept to deployment while ensuring high-quality gameplay and user experience.",
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
                websiteLink: "https://lazinaround.com/"
            },
            
            {
                id: 2,
                title: "VirtualVictories",
                summary: "We all need a win once and awhile. Even if it is a virtual win. Been gaming for most of my life and just wanted a place to share some of the games I like to play.",
                details: "",
                imageCapsule: "",
            },            
        ];     
        
        return new Response(JSON.stringify(projects), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all projects!", { status: 500 })        
    }
}