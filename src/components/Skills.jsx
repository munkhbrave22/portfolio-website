import { motion } from "framer-motion";


const skills = [

{
name:"React",
level:"85%"
},

{
name:"JavaScript",
level:"80%"
},

{
name:"Python",
level:"85%"
},

{
name:"Machine Learning",
level:"75%"
},

{
name:"CSS",
level:"90%"
},

{
name:"Git",
level:"75%"
}

];


function Skills(){

return(

<section className="skills">


<h2>
Skills
</h2>



<div className="skill-container">


{
skills.map((skill,index)=>(


<motion.div

className="skill"

key={index}

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.5,
delay:index*.1
}}

>


<div className="skill-header">

<span>
{skill.name}
</span>

<span>
{skill.level}
</span>

</div>



<div className="bar">

<div
className="progress"
style={{
width:skill.level
}}
>

</div>

</div>


</motion.div>


))

}


</div>


</section>

)

}


export default Skills;