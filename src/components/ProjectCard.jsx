import { Code, ExternalLink } from "lucide-react";


function ProjectCard({

title,
description,
technologies,
image,
github,
demo

}){


return(

<div className="card">


<img
src={image}
alt={title}
className="project-img"
/>



<h3>
{title}
</h3>



<p>
{description}
</p>



<div className="tags">

{
technologies.map((tech,index)=>(

<span key={index}>
{tech}
</span>

))
}

</div>



<div className="project-links">

  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Code size={18} />
    GitHub
  </a>

  {demo && (
    <a
      href={demo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLink size={18} />
      Demo
    </a>
  )}

</div>

</div>

)

}


export default ProjectCard;
