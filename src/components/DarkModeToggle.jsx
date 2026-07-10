import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";


function DarkModeToggle(){

const [darkMode, setDarkMode] = useState(
  localStorage.getItem("darkMode") === "true"
);



useEffect(() => {

if(darkMode){

document.body.classList.add("dark");

}
else{

document.body.classList.remove("dark");

}


localStorage.setItem(
"darkMode",
darkMode
);


}, [darkMode]);



function toggleDarkMode(){

setDarkMode(!darkMode);

}



return(

<button

onClick={toggleDarkMode}

aria-label="Toggle dark mode"

className="dark-toggle"

>

{
darkMode
?
<Sun size={20}/>
:
<Moon size={20}/>
}

</button>

);

}


export default DarkModeToggle;