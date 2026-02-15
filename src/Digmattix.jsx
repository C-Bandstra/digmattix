import { useEffect } from 'react'
import { useLayout } from './LayoutContext';
import HamburgerMenu from './HamburgerMenu';
import Footer from './Footer';
import ContentCard from './ContentCard';
import './Digmattix.css'
import LineTextLink from './LineTextLink';
import DigButton from './DigButton';

const Digmattix = () => {

	const { setHeader, setFooter } = useLayout();

	useEffect(() => {
	  // Ensure setFooter is being called correctly
	  setHeader();
	  setFooter(
      <Footer />
	  );
	}, [setHeader, setFooter]);
  return (
    <>
      <div className="pink">
        <h1 className="landing-header">DIGMATTIX</h1>
      </div>


        <div className="horizontal-content-container">
          <h3 className="content-cards-header">Gardens</h3>
          {/* Gardens */}
          <div className="card-container">
            <ContentCard path="/case-study/1"/>
            <ContentCard path="/case-study/2"/>
            <ContentCard path="/case-study/3"/>
            <ContentCard path="/case-study/4"/>
            <ContentCard path="/case-study/5"/>
            <ContentCard path="/case-study/6"/>
            <ContentCard path="/case-study/7"/>
          </div>
        </div>
        {/* <div className="vertical-content-section pink"> */}
          <div className="quote dn-sans pink">
              <p className="line-text">Where art and nature converge,</p>
              <p className="line-text">our designs emerge. Nature serves</p>
              <p className="line-text">as our wellspring of inspiration,</p>
              <p className="line-text">and through our artistry,we unite</p>
              <p className="line-text">the two.</p>

          </div>
        {/* </div> */}
        <div className="horizontal-content-container">
          {/* Community */}
          <h3 className="content-cards-header">Community</h3>
          <div className="card-container">
            <ContentCard path="/case-study/8"/>
            <ContentCard path="/case-study/9"/>
            <ContentCard path="/case-study/10"/>
            <ContentCard path="/case-study/11"/>
            <ContentCard path="/case-study/12"/>
            <ContentCard path="/case-study/13"/>
            <ContentCard path="/case-study/14"/>
          </div>
        </div>

        <div className="vertical-content-section dark">
          {/* <DigButton /> */}

        </div>

        {/* <div className="vertical-content-section white">

        </div> */}
        <div className="horizontal-content-container">
          {/* Rhythym || Field Operations */}
          <h3 className="content-cards-header">Rhythm</h3>
          <div className="card-container">
            <ContentCard path="/case-study/15"/>
            <ContentCard path="/case-study/16"/>
            <ContentCard path="/case-study/17"/>
            <ContentCard path="/case-study/18"/>
            <ContentCard path="/case-study/19"/>
            <ContentCard path="/case-study/20"/>
            <ContentCard path="/case-study/21"/>
          </div>
        </div>
        <div className="quote dn-sans orange" style={{position: "relative", paddingBottom: "0px"}}>
            <img src="/placeholder.png" className="utility-showcase-img"></img>
            <LineTextLink text="TEES" path="/shop/tees" />
            <LineTextLink text="SWEATSHIRTS" path="/shop/sweatshirts" />
            <LineTextLink text="BANDANAS" path="/shop/bandanas" />
            <LineTextLink text="ACCESSORIES" path="/shop/accessories" />
            <LineTextLink text="OUR STORY" path="/utility/story" />

            <div className="orange story-text-box">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat.
              </p>
            </div> 
        </div>

        <div className="horizontal-content-container">
          {/* Utility */}
          <h3 className="content-cards-header">Utility</h3>
          <div className="card-container">
            <ContentCard path="/case-study/22" color="#ef8741"/>
            <ContentCard path="/case-study/23" color="#ef8741"/>
            <ContentCard path="/case-study/24" color="#ef8741"/>
            <ContentCard path="/case-study/25" color="#ef8741"/>
            <ContentCard path="/case-study/26" color="#ef8741"/>
            <ContentCard path="/case-study/27" color="#ef8741"/>
            <ContentCard path="/case-study/28" color="#ef8741"/>
          </div>
        </div>
    </>
  )
}

export default Digmattix;
