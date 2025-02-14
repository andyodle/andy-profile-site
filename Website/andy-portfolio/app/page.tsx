import Hero from '@components/Hero';
import About from '@components/About';
import ProjectFeed from '@components/ProjectFeed'; 
import Contact from '@components/Contact';

const Home = () => {
    return (
        <section
            id="home" 
            className=""
        >
            <Hero />

            <About />

            <ProjectFeed />

            <Contact />
        </section>
    )
}

export default Home
