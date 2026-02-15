import { useEffect } from 'react'
import { useLayout } from './LayoutContext';
import HamburgerMenu from './HamburgerMenu';
import Footer from './Footer';
import './Digmattix.css'
const DigPlantBuild = () => {

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
      <div className="green">
        <h1 className="landing-header">DIG. PLANT. BUILD.</h1>
      </div>


        <div className="horizontal-content-container">
          <h3 className="content-cards-header">Gardens</h3>
          {/* Gardens */}
          <div className="card-container">
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
          </div>
        </div>
        <div className="horizontal-content-container">
          {/* Community */}
          <h3 className="content-cards-header">Community</h3>
          <div className="card-container">
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
          </div>
        </div>
        <div className="horizontal-content-container">
          {/* Rhythym || Field Operations */}
          <h3 className="content-cards-header">Rhythm</h3>
          <div className="card-container">
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
          </div>
        </div>
        <div className="horizontal-content-container">
          {/* Utility */}
          <h3 className="content-cards-header">Utility</h3>
          <div className="card-container">
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
            <section className="content-card">

            </section>
          </div>
        </div>
    </>
  )
}

export default DigPlantBuild;
