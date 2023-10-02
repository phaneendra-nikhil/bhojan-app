import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav>

        <div className="nav-logo">
            <h1><button onClick={()=>{navigate(`/`)}}><i class="uil uil-utensils-alt"></i> Bhojan</button></h1>
        </div>

        <div className="nav-links">
            <div className="nav-contact"><button title='contact'>Contact</button></div>
            <div className="nav-mode"></div>
        </div>

    </nav>
  )
}

export default Navbar