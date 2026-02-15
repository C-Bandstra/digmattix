import { useState, useEffect } from 'react'
import './App.css'
import HamburgerMenu from './HamburgerMenu'
import ProjectLink from './ProjectLink'
import NavLinks from './NavLinks'
import Utility from './Utility'
import Digmattix from './Digmattix'
import DigPlantBuild from './DigPlantBuild';
import Home from './Home'
import PageBuilder from './PageBuilder'
import CaseStudy from './CaseStudy'
import Shop from './shop/Shop'
import ShopItem from './shop/ShopItem'
import { LayoutProvider } from './LayoutContext';
import ScrollToTop from './ScrollToTop'
import CategoryPage from './CategoryPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DigButton from './DigButton'

function App() {


  return (
    <LayoutProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* <Route path="/" element={<PageBuilder mainEl={<Home />} />} /> */}
          <Route path="/" element={<PageBuilder mainEl={<Digmattix />} />} />
          <Route path="/utility" element={<PageBuilder mainEl={<Utility />} />} />
          <Route path="/dig-plant-build" element={<PageBuilder mainEl={<DigPlantBuild />} />} />
          <Route path="/staging" element={<PageBuilder mainEl={<DigButton />} />} />

          <Route path="/shop/*" element={<PageBuilder mainEl={<Shop />} />}>
            <Route path=":category/:id" element={<ShopItem />} />
            <Route path=":category" element={<CategoryPage />} />
            
          </Route>


          {/* Dynamic Case Study Route */}
          <Route path="/case-study/:id" element={<PageBuilder mainEl={<CaseStudy />} />} />
        </Routes>
      </Router>
    </LayoutProvider>
  );
}

export default App;