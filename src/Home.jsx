import React, { useEffect } from 'react';
import { useLayout } from './LayoutContext';
import NavLinks from './NavLinks'; // Assuming NavLinks is a separate component
import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';
import Carousel from './Carousel';
import DigButton from './DigButton';

const Home = () => {
  const { setHeader, setFooter } = useLayout();

  useEffect(() => {
    // Ensure setFooter is being called correctly
    setHeader(
      <header id="header" className="pink">
        {/* <img src="/digmattix-curved.png" className="shovelhead-logo" /> */}
        <HamburgerMenu />
      </header>
    );
    setFooter(
        <Footer />
    );
  }, [setHeader, setFooter]);

  return (
    <>
      <div className="home-bg pink"></div> {/* Parallax background only on Home */}
      <section className="home-content-container">
        <div className="spacer-top pink"></div>
        {/* <div className="spacer-top"></div> */}
        <div className="quote">
            <p className="line-text">Where art and nature converge,</p>
            <p className="line-text">our designs emerge.Nature serves</p>
            <p className="line-text">as our wellspring of inspiration,</p>
            <p className="line-text">and through our artistry,we unite</p>
            <p className="line-text">the two.</p>
        </div>
        {/* <div className="quote">
            <p className="line-text">DIGMATTIX specializes in unique designs</p>
            <p className="line-text"> that restore flow: from the inside-out</p>
            <p className="line-text">and the outside-in. let us design </p>
            <p className="line-text">your environment and not only will it be</p>
            <p className="line-text">more beautiful, we're pretty sure your life</p>
            <p className="line-text">will work better in it.</p>
        </div> */}
        {/* <div className="spacer-bottom pink"></div> */}
        <div className="spacer-bottom pink"></div>
        
        <DigButton />


        <section className="case-study-container">  
          <div className="case-study-info dark case-study-child">
            <section className="case-study-header">
              <h1 className="oswald case-study-key">Case Study Title</h1>
              {/* <button>View</button> */}
            </section>
            <div className="study-info-line">
              <h3 className="case-study-key">Location:</h3>
              <h3 className="case-study-value">Chicago, IL</h3>
            </div>
            <div className="study-info-line">
              <h3 className="case-study-key">Description:</h3>
              <h3 className="case-study-value">Private Residence</h3>
            </div>
            <div className="study-info-line">
              <h3 className="case-study-key">Size:</h3>
              <h3 className="case-study-value">25x125</h3>
            </div>
            <div className="study-info-line">
              <h3 className="case-study-key">Completed:</h3>
              <h3 className="case-study-value">2020</h3>
            </div>
            <div className="study-info-line">
              <h3 className="case-study-key">Services:</h3>
              <h3 className="case-study-value">Landscaping Architechture,</h3>
            </div>
            <div className="study-info-line">
              <h3 className="hidden case-study-key">Services:</h3>

              <h3 className="case-study-value"> Landscape Design, Horticulture,</h3>
              {/* <h3 className="case-study-value">Horticulture, Construction, Engineering, Lighting,</h3> */}
            </div>
            <div className="study-info-line">
              <h3 className="hidden case-study-key">Services:</h3>
              <h3 className="case-study-value">Lighting, Consulting</h3>

            </div>

          </div>

          <div className=" case-study-child">
            <div className="white half-tall">
              {/* <div className="coral cs-spacer"></div> */}
              <div className="cs-section">
                <h1 className="no-margin oswald">Mission</h1>
                <p className="no-margin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Condimentum vitae sapien pellentesque habitant morbi.
                </p>
              </div>
            </div>
            <div className="white half-tall">
            <div className="coral cs-spacer"></div>
              <div className="cs-section">
                <h1 className="no-margin oswald">Vision</h1>
                <p className="no-margin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Condimentum vitae sapien pellentesque habitant morbi.
                </p>
              </div>
            </div>
          </div>
        </section>
        <DigButton />


        <section className="case-study-container">  
          <div className="case-study-info dark case-study-child">
            <section className="case-study-header">
              <h1 className="oswald case-study-key">Case Study Title</h1>
              {/* <button>View</button> */}
            </section>
            <div className="study-info-line">
              <h3 className="case-study-key">Location:</h3>
              <h3 className="case-study-value">Chicago, IL</h3>
            </div>
            <div className="study-info-line">
              <h3 className="case-study-key">Description:</h3>
              <h3 className="case-study-value">Private Residence</h3>
            </div>
            <div className="study-info-line">
              <h3 className="case-study-key">Size:</h3>
              <h3 className="case-study-value">25x125</h3>
            </div>
            <div className="study-info-line">
              <h3 className="case-study-key">Completed:</h3>
              <h3 className="case-study-value">2020</h3>
            </div>
            <div className="study-info-line">
              <h3 className="case-study-key">Services:</h3>
              <h3 className="case-study-value">Landscaping Architechture,</h3>
            </div>
            <div className="study-info-line">
              <h3 className="hidden case-study-key">Services:</h3>

              <h3 className="case-study-value"> Landscape Design, Horticulture,</h3>
              {/* <h3 className="case-study-value">Horticulture, Construction, Engineering, Lighting,</h3> */}
            </div>
            <div className="study-info-line">
              <h3 className="hidden case-study-key">Services:</h3>
              <h3 className="case-study-value">Lighting, Consulting</h3>

            </div>

          </div>

          <div className=" case-study-child">
            <div className="white half-tall">
              {/* <div className="coral cs-spacer"></div> */}
              <div className="cs-section">
                <h1 className="no-margin oswald">Mission</h1>
                <p className="no-margin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Condimentum vitae sapien pellentesque habitant morbi.
                </p>
              </div>
            </div>
            <div className="white half-tall">
            <div className="coral cs-spacer"></div>
              <div className="cs-section">
                <h1 className="no-margin oswald">Vision</h1>
                <p className="no-margin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Condimentum vitae sapien pellentesque habitant morbi.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="spacer-bottom pink"></div> */}
        {/* <div className="spacer-bottom pink"></div> */}
        {/* <NavLinks /> */}
        {/* <Carousel /> */}
      </section>
    </>
  );
};

export default Home;