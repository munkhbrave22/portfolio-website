import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import DarkModeToggle from "./DarkModeToggle";


function Navbar(){

const [open,setOpen] = useState(false);


return(

<nav 
  className="navbar"
  aria-label="Main navigation"
>


<h2 className="logo">
Munkhzorig
</h2>



<button
  className="menu-btn"
  onClick={()=>setOpen(!open)}
  aria-label={open ? "Close navigation menu" : "Open navigation menu"}
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