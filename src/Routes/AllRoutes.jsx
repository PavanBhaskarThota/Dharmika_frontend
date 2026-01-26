import { Route, Routes } from 'react-router-dom'
import {Home} from '../Pages/Home'
import {Products} from '../Pages/Products'
import { About } from '../Pages/About'
import { FAQ } from '../Pages/FAQ'
import { Contact } from '../Pages/Contact'
import { Box } from '@mui/material'

export const AllRoutes = () => {
  return (
    <Box sx={{pt: { xs: '58px', md: '72px'}}}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Box>
      
  )
}
