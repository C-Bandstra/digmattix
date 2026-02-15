import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="dark">
        {/* <section id="social-tree"> */}
        <section id="shovel-tree">
            {/* <img src="/spotify-grey.svg" className="social-icon" />
            <img src="/facebook-grey.svg" className="social-icon" />
            <img src="/instagram-grey.svg" className="social-icon" /> */}
            <Link to="/dig-plant-build">
              <img src="/digplantbuild-shovelhead.png" className="shovel-icon" />
            </Link>
            <Link to="/">
              <img src="/digmattix-shovelhead-red.png" className="shovel-icon" />
            </Link>
            <Link to="/utility">
              <img src="/u&r-shovelhead.png" className="shovel-icon" />
            </Link>
        </section>
        {/* <img src="/digmattix-horizontal-shovel.png" className="shovelhead-logo white" /> */}
        {/* <img src="/digmattix-curved.png" className="shovelhead-logo" /> */}
    </footer>
  )
}

export default Footer;

{/* <img src="/spotify-black.svg" className="social-icon" />
<img src="/facebook-black.svg" className="social-icon" />
<img src="/instagram-black.svg" className="social-icon" /> */}