import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import DarkModeToggle from "./DarkModeToggle";


function Navbar(){

const [open,setOpen] = useState(false);


return(

<nav className="navbar">


<h2 className="logo">
Munkhzorig.dev
</h2>



<button
className="menu-btn"
onClick={()=>setOpen(!open)}
>

{
open ?

<X size={28}/>

:

<Menu size={28}/>

}

</button>



<div className={`nav-links ${open ? "show" : ""}`}>


<NavLink
to="/"
onClick={()=>setOpen(false)}
>
Home
</NavLink>


<NavLink
to="/about"
onClick={()=>setOpen(false)}
>
About
</NavLink>


<NavLink
to="/contact"
onClick={()=>setOpen(false)}
>
Contact
</NavLink>



<DarkModeToggle />


</div>


</nav>

)

}


export default Navbar;