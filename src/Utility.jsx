import { useEffect } from 'react'
import { useLayout } from './LayoutContext';
import HamburgerMenu from './HamburgerMenu';
import Footer from './Footer';
import './Digmattix.css'
import './Utility.css'
import ContentCard from './ContentCard';
import { useNavigate } from 'react-router-dom';

const Utility = () => {
  const navigate = useNavigate();
	const { setHeader, setFooter } = useLayout();

	useEffect(() => {
	  // Ensure setFooter is being called correctly
	  setHeader();
	  setFooter(
      <Footer />
	  );
	}, [setHeader, setFooter]);

  const handleClick = (e, categoryPath) => {
    e.stopPropagation();
    navigate(`/shop/${categoryPath}`); // push to new URL
    // navigate('/new-url', { replace: true }); // replaces current entry in history
  };

  return (
    <>
      <div className="orange">
        <h1 className="landing-header">UTILITY & RHYTHM</h1>
      </div>


        <div className="horizontal-content-container dark">
        <h3 onClick={(e) => handleClick(e, "tees")} className="utility-content-cards-header content-cards-header orange">tees</h3>
          {/* Gardens */}
          <div className="card-container utility-card-container dark">
            <ContentCard path="/shop/tees/1" color="#ffffff"/>
            <ContentCard path="/shop/tees/2" color="#ffffff"/>
            <ContentCard path="/shop/tees/3" color="#ffffff"/>
            <ContentCard path="/shop/tees/4" color="#ffffff"/>
            <ContentCard path="/shop/tees/5" color="#ffffff"/>
            <ContentCard path="/shop/tees/6" color="#ffffff"/>
          </div>
        </div>
        <div className="horizontal-content-container dark">
          {/* Community */}
          <h3 onClick={(e) => handleClick(e, "sweatshirts")} className="utility-content-cards-header content-cards-header orange">sweatshirts</h3>
          <div className="card-container utility-card-container dark">
            <ContentCard path="/shop/sweatshirts/1" color="#ffffff"/>
            <ContentCard path="/shop/sweatshirts/2" color="#ffffff"/>
            <ContentCard path="/shop/sweatshirts/3" color="#ffffff"/>
            <ContentCard path="/shop/sweatshirts/4" color="#ffffff"/>
            <ContentCard path="/shop/sweatshirts/5" color="#ffffff"/>
            <ContentCard path="/shop/sweatshirts/6" color="#ffffff"/>
          </div>
        </div>
        <div className="horizontal-content-container dark">
          {/* Rhythym || Field Operations */}
          <h3 onClick={(e) => handleClick(e, "bandanas")} className="utility-content-cards-header content-cards-header orange">Bandanas</h3>
          <div className="card-container utility-card-container dark">
            <ContentCard path="/shop/bandanas/1" color="#ffffff"/>
            <ContentCard path="/shop/bandanas/2" color="#ffffff"/>
            <ContentCard path="/shop/bandanas/3" color="#ffffff"/>
            <ContentCard path="/shop/bandanas/4" color="#ffffff"/>
            <ContentCard path="/shop/bandanas/5" color="#ffffff"/>
            <ContentCard path="/shop/bandanas/6" color="#ffffff"/>
          </div>
        </div>
        <div className="horizontal-content-container dark">
          {/* Utility */}
          <h3 onClick={(e) => handleClick(e, "accessories")} className="utility-content-cards-header content-cards-header orange">accessories</h3>
          <div className="card-container utility-card-container dark">
            <ContentCard path="/shop/accessories/1" color="#ffffff"/>
            <ContentCard path="/shop/accessories/2" color="#ffffff"/>
            <ContentCard path="/shop/accessories/3" color="#ffffff"/>
            <ContentCard path="/shop/accessories/4" color="#ffffff"/>
            <ContentCard path="/shop/accessories/5" color="#ffffff"/>
            <ContentCard path="/shop/accessories/6" color="#ffffff"/>
          </div>
        </div>
    </>
  )
}

export default Utility;
