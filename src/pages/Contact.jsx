import { motion } from "framer-motion";
import { Mail, Code } from "lucide-react";
import PageTransition from "../components/PageTransition";

function Contact(){

return(

<PageTransition>

<section className="page contact">


<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:0.7}}

>


<h1>
Contact Me
</h1>


<p className="contact-text">

I'm always interested in new projects,
collaborations and opportunities.
Feel free to reach out.

</p>



<div className="contact-card">


<Mail size={35}/>


<h2>
Email
</h2>


<p>
your.email@example.com
</p>


<a
className="button"
href="mailto:munkhzorig.gantumur@ue-germany.de"
>

Send Email

</a>


</div>



<div className="socials">


<a href="#">

<Code size={25}/>

GitHub

</a>


<a href="#">

<Code size={25}/>

LinkedIn

</a>


</div>



</motion.div>


</section>

</PageTransition>

)

}


export default Contact;