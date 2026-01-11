import { Box } from '@mui/material'
import allSpices from '../assets/homeImages/allSpices.png'
export const Home = () => {
  return (
    <main >
      <Box sx={{display: 'flex', padding: '1.5rem 0', height: { xs: '300px', md: '600px' },}}>
        <Box sx={{height: '100%', width: '30%'}}>
          <img src={allSpices} alt="logo" style={{height: '100%'}}/>
        </Box>
        <Box sx={{width: '40%'}}>
          
        </Box>
      </Box>
    </main>
  )
}

