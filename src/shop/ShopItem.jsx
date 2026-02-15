import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import "./Shop.css"
import ColorwayOptions from './ColorwayOptions';
import { useLayout } from '../LayoutContext';
import UtilityHeader from '../UtilityHeader';
import Footer from '../Footer';

const ShopItem = () => {
  const { category, id } = useParams();
  const location = useLocation();
  
  // console.log('Category:', category);
  // console.log('Item ID:', id);
  // console.log('Full path:', location.pathname);

  const [selected, setSelected] = useState(false)

  const { setHeader, setFooter } = useLayout();

  useEffect(() => {
    // Ensure setFooter is being called correctly
    setHeader(
      <UtilityHeader />
    );
    setFooter(
        <Footer />
    );
  }, [setHeader, setFooter]);

  return (
    <div style={{padding: "10px"}}>
      <h3>Shop Item {id} Name</h3>
      <div className="shop-item-img-container">
        <img></img>
      </div>
      <section className="flex shop-item-options">
        <select className="shop-item-option">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <button className="shop-item-option">Add to cart</button>
      </section>
      <div className="shop-item-details-container">
        <div className="flex shop-color-price">
          <p>Color</p>
          <p>Price</p>
        </div>
        <div className="colorway-container flex">
          <ColorwayOptions />
        </div>
        <p className="shop-item-description">
          Water resistant Supplex® nylon taslan with full zip closure
          and welt zip hand pockets at lower front. Interior elastic 
          shockcord at fixed hood and hem with elastic cuffs. Embroidered 
          logos on shoulder and back. Faux fur reverse side with welt hand 
          pockets at lower front.
        </p>
      </div>
    </div>
  )
}

export default ShopItem;
