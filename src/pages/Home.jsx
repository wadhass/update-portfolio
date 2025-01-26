import AboutMe from "../section/AboutMe"
import ContactMe from "../section/ContactMe"
import Hero from "../section/Hero"
import Services from "../section/Services"
import Skills from "../section/Skills"
import ProjectPage from "./ProjectPage"


const Home = () => {
  return (
    <main>
        <Hero /> 
        <Skills />
        <ProjectPage />
        <AboutMe />
        <Services />
        <ContactMe />

    </main>
  )
}

export default Home;