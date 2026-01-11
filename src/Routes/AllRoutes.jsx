import { Route, Routes } from 'react-router-dom'
import {Home} from '../Pages/Home'
import {Products} from '../Pages/Products'
import { About } from '../Pages/About'
import { FAQ } from '../Pages/FAQ'
import { Contact } from '../Pages/Contact'

export const AllRoutes = () => {
  return (
    <div style={{padding: '0.5rem 1.5rem',paddingTop: '72px'}}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/About" element={<About />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </div>
      
  )
}
