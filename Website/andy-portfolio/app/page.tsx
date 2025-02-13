import Hero from '@components/Hero';
import About from '@components/About';
import ProjectFeed from '@components/ProjectFeed'; 

const Home = () => {
    return (
        <section
            id="home" 
            className=""
        >
            <Hero />

            <About />

            <ProjectFeed />
        </section>
    )
}

export default Home
