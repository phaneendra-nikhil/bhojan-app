import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/nav/navbar'
import Header from './Pages/header/header'
import Footer from './Pages/footer/footer'
import Contact from './Pages/contact/contact'
import Copy from './Pages/copyrights/copy'
import Recipes from './Pages/recipes/recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/:MealId' element={<Recipes />} />
    </Routes>
    <Contact />
    <Footer />
    <Copy />
    </>
  )
}

export default App
