import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";


function Contact(){

const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
});


const [errors,setErrors] = useState({});

const [success,setSuccess] = useState(false);



function handleChange(e){

setFormData({
    ...formData,
    [e.target.name]: e.target.value
});

}



function validate(){

const newErrors = {};


if(!formData.name.trim()){
    newErrors.name="Name is required";
}


if(!formData.email.trim()){

    newErrors.email="Email is required";

}
else if(
!/\S+@\S+\.\S+/.test(formData.email)
){

    newErrors.email="Please enter a valid email";

}



if(!formData.message.trim()){

    newErrors.message="Message is required";

}
else if(formData.message.length < 20){

    newErrors.message="Message must be at least 20 characters";

}


return newErrors;

}




function handleSubmit(e){

e.preventDefault();


const validationErrors = validate();


if(Object.keys(validationErrors).length > 0){

    setErrors(validationErrors);
    setSuccess(false);
    return;

}



setErrors({});

setSuccess(true);


setFormData({
name:"",
email:"",
message:""
});


}



return(

<section className="page contact">


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

>


<h1>
Contact Me
</h1>



<p className="contact-text">

Have a question or want to work together?
Send me a message.

</p>



<form 
className="contact-form"
onSubmit={handleSubmit}
noValidate
>



<label htmlFor="name">
Name
</label>


<input
id="name"
name="name"
type="text"
autoComplete="name"

value={formData.name}

onChange={handleChange}

/>


{errors.name && (

<p 
className="error"
role="alert"
>
{errors.name}
</p>

)}




<label htmlFor="email">
Email
</label>


<input
id="email"
name="email"
type="email"
autoComplete="email"

value={formData.email}

onChange={handleChange}

/>


{errors.email && (

<p 
className="error"
role="alert"
>
{errors.email}
</p>

)}




<label htmlFor="message">
Message
</label>


<textarea

id="message"

name="message"

rows="5"

value={formData.message}

onChange={handleChange}

/>



{errors.message && (

<p 
className="error"
role="alert"
>
{errors.message}
</p>

)}




<button type="submit">

Send Message

</button>



{
success && (

<p
className="success"
role="status"
>

Message sent successfully!

</p>

)

}



</form>




<div className="contact-card">


<Mail size={35}/>


<h2>
Email
</h2>


<a
href="mailto:munkhzorig.gantumur@ue-germany.de"
>

munkhzorig.gantumur@ue-germany.de

</a>


</div>



</motion.div>


</section>

)

}


export default Contact;