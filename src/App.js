import logo from './logo.svg';
import './App.css';
import { GridView } from './components/Grid';
import Card from './components/Card';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import {Box} from '@mui/material';
import { LineText } from './components/LineText';
import { Landing } from './components/Landing';
import { CaseStudy } from './components/CaseStudy';


function App() {

  useEffect(() => {
    const scrollContainer = document.querySelector("main");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
  }, [])


  return (
    <>
      {/* <Landing /> */}
      <CaseStudy />
    </>
  );
}

export default App;
