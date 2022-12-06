import React from 'react'
import { Route, Routes } from 'react-router'
import AboutUs from '../pages/AboutUs/AboutUs'
import Blog from '../pages/Blog/Blog'
import Contacts from '../pages/Contacts/Contacts'
import Error from '../pages/Error/Error'
import Main from '../pages/Main/Main'
import OurTeam from '../pages/order/OurTeam'
import Services from '../pages/Services/Services'
import FAQ from '../pages/FAQ/FAQ'


const MyRouter=()=>{
    return (
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/FAQ'element={<FAQ/>} />
        <Route path='/Services'element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Error' element={<Error/>}/>
        <Route path='/OurTeam' element={<OurTeam/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>

      </Routes>
       
    )
}

export default MyRouter