import { motion } from "framer-motion";
import { Code, GraduationCap, Heart, Rocket } from "lucide-react";
import Timeline from "../components/Timeline";
import PageTransition from "../components/PageTransition";

function About(){

return(

<PageTransition>

<section className="page about">



<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:.7}}

>


<h1>
About Me
</h1>


<p className="intro">

I am a Computer Science student passionate about
software development, modern web technologies,
and building solutions that combine creativity
with technology.

</p>



<div className="about-grid">


<div className="about-card">

<GraduationCap size={35}/>

<h3>
Education
</h3>

<p>
Computer Science Student
</p>

</div>


<div className="about-card">

<Code size={35}/>

<h3>
Programming
</h3>

<p>
React, JavaScript, Python,
Machine Learning, Git
</p>

</div>



<div className="about-card">

<Heart size={35}/>

<h3>
Interests
</h3>

<p>
Basketball, cycling, swimming,
climbing, cars and computers
</p>

</div>



<div className="about-card">

<Rocket size={35}/>

<h3>
Goals
</h3>

<p>
Continuously improving my skills
and creating useful software.
</p>

</div>


</div>

 <Timeline />

</motion.div>


</section>

</PageTransition>

)

}


export default About;