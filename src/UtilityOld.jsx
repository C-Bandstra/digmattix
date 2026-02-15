import React, { useEffect } from 'react';
import { useLayout } from './LayoutContext';
import Footer from './Footer';
import UtilityHeader from './UtilityHeader';

const UtilityOld = () => {
    const { setHeader, setFooter} = useLayout();

    useEffect(() => {
    setHeader(<UtilityHeader />);
    setFooter(<Footer />);
    // setLogo('/utility-logo.svg');
    }, [setHeader, setFooter]);

    return ( 
        <>
            <div className="utility-bg"></div>

            <section className="utility-header-container">
                <h1 className="utility-header">Utility & Rhythm</h1>
                {/* <span className="trademark">TM</span> */}
            </section>

            <section>
                <p className="line-text utility-line-text">TEES</p>
                <p className="line-text utility-line-text">SWEATSHIRTS</p>
                <p className="line-text utility-line-text">BANDANAS</p>
                <p className="line-text utility-line-text">ACCESSORIES</p>
                <p className="line-text utility-line-text">OUR STORY</p>
            </section>
            
            <section className="utility-story-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Condimentum vitae sapien pellentesque habitant morbi.
                    Dignissim diam quis enim lobortis scelerisque fermentum.
                    Dolor sit amet, consectetur adipiscing elit  ut labore et,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </section>
        </>
    )
};

export default UtilityOld;