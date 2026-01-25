import { Route, Routes } from 'react-router-dom'
import {Home} from '../Pages/Home'
import {Products} from '../Pages/Products'
import { About } from '../Pages/About'
import { FAQ } from '../Pages/FAQ'
import { Contact } from '../Pages/Contact'
import { Box } from '@mui/material'

export const AllRoutes = () => {
  return (
    <Box sx={{pt: { xs: '58px', md: '68px'}}}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/About" element={<About />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </Box>
      
  )
}
