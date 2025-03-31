import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Categories from './components/categoriespage.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Home></Home>
    {/* <Categories></Categories> */}
    </BrowserRouter>
  )
}

export default App
