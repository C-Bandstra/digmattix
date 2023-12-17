import { Typography } from '@mui/material';
import {Box} from '@mui/material';
import { LineText } from './LineText';
import Card from './Card';
import '../App.css'

export const Landing = () => {
  return (
    <main>
      <section>
        <Box sx={{ width: '3vw', height: '100%', backgroundColor: '#ef8741'}}>

        </Box>
      </section>
      <section>
        <Box sx={{ width: '90vw', height: '100%', backgroundColor: '#fb0754'}}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography color="white" variant="h1" sx={{paddingLeft: '3vw', fontSize: '8em', lineWidth: '20px'}}>DIGMATTIX</Typography>
            <LineText variant="h3" text="Where art and nature converge," />
            <LineText variant="h3" text="our designs emerge.Nature serves" />
            <LineText variant="h3" text="as our wellspring of inspiration," />
            <LineText variant="h3" text="and through our artistry,we unite" />
            <LineText variant="h3" text="the two." />
          </Box>
        </Box>
      </section>
      <section>
        <Box sx={{ width: '24vw', height: '100%', backgroundColor: '#202120', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography color="#fb0754" variant='h3' sx={{ width: '85%'}}>Design (and build) for the outdorors that work from you with Nature to flow from the inside to the outside... beautifully.</Typography>
        </Box>
      </section>
      <section>
        <Box sx={{height: '100%'}}>
          <Box sx={{ width: '24vw', height: '50%', backgroundColor: ''}}>
          </Box>
          <Box sx={{ width: '24vw', height: '50%', backgroundColor: '#fb0754'}}>
          </Box>
        </Box>
        
      </section>
      <section>
        <section class="case-studies">
          <div className="cs-container">
            <Card color="#ef8741"/>
          </div>
          <div className="cs-container">
            <Card color="#f57666"/>
          </div>
          <div className="cs-container">
            <Card color="#3c549b"/>
          </div>
          <div className="cs-container">
            <Card color="#edc660"/>
          </div>
        </section>
      </section>
      <section>
        <Box sx={{ width: '24vw', height: '100%', backgroundColor: '#fb0754'}}>

        </Box>
      </section>
      <section>
        <section class="case-studies">
          <div className="cs-container">
            <Card color="#ef8741"/>
          </div>
          <div className="cs-container">
            <Card color="#f57666"/>
          </div>
          <div className="cs-container">
            <Card color="#3c549b"/>
          </div>
          <div className="cs-container">
            <Card color="#edc660"/>
          </div>
        </section>
      </section>
    </main>
  )
}
