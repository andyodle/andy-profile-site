export const GET = async (request) => {
    try {
        const projects = [];

        // Test Projects Data
        const tempProject = {
            id: 1,
            projectTitle: "LazinAround",
            projectDesc: "A puzzle game that will put your laser puzzling and color theory skills to the test. Master the increasingly complex puzzles by manipulating multiple lasers into a single color.",
            projectImage: "https://img.itch.zone/aW1nLzEzODEzMTA5LnBuZw==/315x250%23c/6NvZYm.png",
        };
        
        projects.push(tempProject);

        var tempProject2 = {
            id: 2,
            projectTitle: "VirtualVictories",
            projectDesc: "We all need a win once and awhile. Even if it is a virtual win. Been gaming for most of my life and just wanted a place to share some of the games I like to play.",
            projectImage: "",
        };
        
        projects.push(tempProject2);        
        
        return new Response(JSON.stringify(projects), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all projects!", { status: 500 })        
    }
}