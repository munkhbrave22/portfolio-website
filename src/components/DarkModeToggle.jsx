import { useEffect, useState } from "react";

function DarkModeToggle(){

const [dark,setDark]=useState(
localStorage.getItem("theme")==="dark"
);


useEffect(()=>{

if(dark){

document.body.classList.add("dark");

localStorage.setItem("theme","dark");

}

else{

document.body.classList.remove("dark");

localStorage.setItem("theme","light");

}

},[dark]);


return(

<button
className="theme-btn"
onClick={()=>setDark(!dark)}
>

{dark ? "☀️" : "🌙"}

</button>

)

}

export default DarkModeToggle;