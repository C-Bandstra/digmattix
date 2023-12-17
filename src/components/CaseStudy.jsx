import { Typography } from '@mui/material';
import {Box} from '@mui/material';
import { LineText } from './LineText';
import Card from './Card';
import '../App.css'

export const CaseStudy = () => {
  return (
    <main>
        <section>
        <Box sx={{ width: '3vw', height: '100%', backgroundColor: '#ef8741'}}>

        </Box>
      </section>
      <section>
        <Box sx={{ width: '90vw', height: '100%', backgroundColor: '#202120'}}>
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
        <Box sx={{height: '100%'}}>
          <Box sx={{ width: '50vw', height: '50%', backgroundColor: ''}}>
          </Box>
          <Box sx={{ width: '50vw', height: '50%', backgroundColor: '#fb0754'}}>
          </Box>
        </Box>
      </section>
    </main>
  )
}
