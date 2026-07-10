import { motion } from "framer-motion";
import { GraduationCap, Code, Brain } from "lucide-react";


const timeline = [

{
year:"2024 - Present",
title:"Computer Science Student",
text:
"Building foundations in programming, software development and computer science.",
icon:<GraduationCap/>
},


{
year:"2025",
title:"Web Development",
text:
"Creating modern websites and applications using React, JavaScript and CSS.",
icon:<Code/>
},


{
year:"2026",
title:"Machine Learning",
text:
"Exploring data analysis, artificial intelligence and machine learning projects.",
icon:<Brain/>
}

];


function Timeline(){


return(

<section className="timeline">


<h2>
Education & Journey
</h2>


<div className="timeline-container">


{
timeline.map((item,index)=>(


<motion.div

className="timeline-item"

key={index}

initial={{
opacity:0,
x:index%2===0?-40:40
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.6
}}

>


<div className="timeline-icon">

{item.icon}

</div>


<div className="timeline-content">


<h3>
{item.year}
</h3>


<h4>
{item.title}
</h4>


<p>
{item.text}
</p>


</div>


</motion.div>


))

}


</div>


</section>

)

}


export default Timeline;