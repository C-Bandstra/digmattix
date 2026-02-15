import {useEffect} from 'react'
import HamburgerMenu from './HamburgerMenu';
import Footer from './Footer';
import { useLayout } from './LayoutContext';
import "./DigButton.css"


const DigButton = () => {

  return (
    <div className="dig-btn-container">
        <button className="lets-dig-btn oswald-i">LET'S DIG</button>
        <img src="/horizontal-shovel.png" className="h-shovel-decor"/>
    </div>
  )
}

export default DigButton;
