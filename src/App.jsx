import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Destination from './components/Destination'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Flight from './components/Router/Flight'
import { BrowserRouter, RouterProvider , Routes ,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {/* <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/flight" element={<Flight />} />
        {/* <Route path="/Herosection" element={<Herosection />} /> */}
      {/* </Routes>
      </BrowserRouter> */} 
      <Navbar/>
      <Herosection/>
      <div className='places'>
        <Destination img="https://plus.unsplash.com/premium_photo-1675975635390-6ca4d5c056b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Rome" description="Discover Rome's Timeless Beauty" />
        <Destination img="https://images.unsplash.com/photo-1471623432079-b009d30b6729?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Europe" description="Explore Europe's Timeless Charms"/>
        <Destination img="https://images.unsplash.com/photo-1599833975787-5c143f373c30?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Stonehenge " description="Mystery and Majesty Unveiled"/>
        <Destination img="https://images.unsplash.com/photo-1559755733-c0454a798f3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Great Wall of China" description="Marvel at China's Greatness"/>
        <Destination img="https://images.unsplash.com/photo-1553455427-c38fa28dc586?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Paris" description="Timeless Romance, Art"/>
        <Destination img="https://images.unsplash.com/photo-1531678724157-5523af434e4b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Taj Mahal" description="Captivating Majesty of Taj Mahal"/>
        <Destination img="https://images.unsplash.com/photo-1618944914141-cc5e785592ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Universal Boulevard" description="Universal Boulevard: Where Fun Begins"/>
        <Destination img="https://plus.unsplash.com/premium_photo-1678379473620-db6bc7ff8a11?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="London" description="Where History Lives On"/>

      </div>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
