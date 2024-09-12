import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminLogin from './components/AdminLogin/AdminLogin'
import AdminSin from './components/AdminSinup/AdminSin'
import UserLogin from './components/UserLogin/UserLogin'
import VendorLogin from './components/VendorLogin/VendorLogin'
import  { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import VendorSin from './components/VendorLogin/VendorSin'
import VHome from './components/VendorsHome/VHome'
import Additem from './components/Additem/Additem'
import AHome from './components/AHome/AHome'
import Maintainuser from './components/Maintainuser/Maintainuser'
import Maintainvendor from './components/Maintainvendor/Maintainvendor'
import UHome from './components/UHome/UHome'
import Vendorss from './components/vendorss/vendorss'


function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/vendors' element={ <VendorLogin />}/>
       <Route path='/vendorssinup' element={<VendorSin/>}/>
       <Route path='/adminlogin' element={ <AdminLogin/>}/>
       <Route path='/adminsinup' element={ <AdminSin/>}/>
       <Route path='/userlogin' element={ <UserLogin/>}/>
       <Route path='/vhome' element={ <VHome/>}/>
       <Route path='/additem' element={ <Additem/>}/>
       <Route path='/ahome' element={ <AHome/>}/>
       <Route path='/uhome' element={ <UHome/>}/>
       <Route path='/maintainuser' element={ <Maintainuser/>}/>
       <Route path='/maintaivendor' element={ <Maintainvendor/>}/>
       <Route path='/vendorss' element={<Vendorss/>}/>
     </Routes>
    </BrowserRouter>
   
  </>
  );
}

export default App
