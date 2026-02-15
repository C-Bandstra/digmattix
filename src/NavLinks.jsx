import React from 'react'
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav id="landing-nav">
        {/* <Link to="/gardens" className="nav-link blue-decoration">Gardens</Link>
        <Link to="/utility" className="nav-link orange-decoration">Utility & Rhythm</Link>
        <Link to="/dig-plant-build" className="nav-link coral-decoration">DIG. PLANT. BUILD.</Link>
        <Link to="/community" className="nav-link yellow-decoration">Community</Link> */}
        <Link to="/gardens" className="nav-link black-decoration">Gardens</Link>
        <Link to="/utility" className="nav-link black-decoration">Utility & Rhythm</Link>
        <Link to="/dig-plant-build" className="nav-link black-decoration">DIG. PLANT. BUILD.</Link>
        <Link to="/community" className="nav-link black-decoration">Community</Link>
    </nav>
  )
}

export default NavLinks;
