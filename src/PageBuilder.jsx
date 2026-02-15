import React, { useEffect } from 'react';
import { useLayout } from './LayoutContext'; // Use the LayoutContext
import ScrollToTop from './ScrollToTop';

const PageBuilder = ({ mainEl }) => {
  const { header, footer } = useLayout(); // Get the header and footer from context

  // console.log('Header:', header);
  // console.log('Footer:', footer);

  return (
    <>
      <ScrollToTop />
      <div className="page-container supreme">
        {header}
        <main>{mainEl}</main>
        {footer}
      </div>
    </>
  );
};

export default PageBuilder;