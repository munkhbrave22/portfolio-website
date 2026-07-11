import profile from "../assets/Profile.webp";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import Skills from "../components/Skills";
import PageTransition from "../components/PageTransition";
import {motion} from "framer-motion";


function Home(){

return(

<PageTransition>

<main>


<section className="hero">


<motion.img

src={profile}

alt="Portrait of Munkhzorig"

className="profile"

fetchPriority="high"

initial={{opacity:0}}

animate={{opacity:1}}

transition={{duration:1}}

/>


<motion.div

className="hero-text"

initial={{x:-50,opacity:0}}

animate={{x:0,opacity:1}}

>


<h1>
Hi, I'm Munkhzorig Gantumur
</h1>


<h2>
Digital Business and Data Science Student
</h2>


<p>
I like to try out web applications and explore
software development, machine learning and technology.
</p>


<div>

<a href="#projects"
className="button">

Projects

</a>


<a href="/contact"
className="button secondary">

Contact

</a>

</div>


</motion.div>


</section>



<section id="projects">

<h2>
Featured Projects
</h2>


<div className="projects">

{
projects.map((project,index)=>(

<ProjectCard
key={index}
{...project}
/>

))

}

</div>

</section>



<Skills />


</main>

</PageTransition>

)

}

export default Home;