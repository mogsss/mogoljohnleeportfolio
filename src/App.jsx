import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Footer from '../components/footer';

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <div>
    <Footer />
    </div>
   </>
  )
}
export default App
