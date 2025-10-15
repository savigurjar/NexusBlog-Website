import React from 'react'
import {Routes,Route} from "react-router"
import Home from './pages/Home'
import Blog from './pages/Blog'
const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog" element={<Blog/>}/>
   </Routes>
   </>
  )
}

export default App
