import './App.css'
import Navbar from './assets/Navbar'
import Dummy from './assets/Dummy'
import Footer from './assets/Footer'
import Home from './assets/Home'
import AddNewListing from './assets/AddNewListing'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addnewlisting" element={<AddNewListing />} />
        </Routes>
        <Footer/>
      </Router>
      <Dummy />
      <Home />
      <Footer/>
    </>
  )
}

export default App
