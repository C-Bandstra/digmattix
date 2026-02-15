import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import { useLayout } from "./LayoutContext";

const CaseStudy = () => {
  const { id } = useParams();

  const { setHeader, setFooter } = useLayout();

	useEffect(() => {
	  // Ensure setFooter is being called correctly
	  // setHeader(
		// <header id="header" className="pink">
		//   {/* <img src="/digmattix-curved.png" className="shovelhead-logo" /> */}
		//   {/* <HamburgerMenu /> */}
    //   <h1>DIGMATTIX</h1>
		// </header>
	  // );
	  setFooter(
      <Footer />
	  );
	}, [setHeader, setFooter]);

  return (
    <>
      <div style={{display: "flex", justifyContent: "center"}}> 
        <img src="/placeholder.png" style={{width: "95vw"}}></img>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}> 
        <img src="/placeholder.png" style={{width: "95vw"}}></img>
      </div>
      <div className="case-study-info dark case-study-child">
        <section className="case-study-header">
          <h1 className="oswald case-study-key">Case Study Title {id}</h1>
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
      <div style={{display: "flex", justifyContent: "center"}}> 
        <img src="/placeholder.png" style={{width: "95vw"}}></img>
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

      <div style={{display: "flex", justifyContent: "center"}}> 
        <img src="/placeholder.png" style={{width: "95vw"}}></img>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}> 
        <img src="/placeholder.png" style={{width: "95vw"}}></img>
      </div>
    </>
  );
};

export default CaseStudy;
