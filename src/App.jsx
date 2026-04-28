import { HashRouter, Routes, Route, Link } from "react-router-dom";
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
    <HashRouter basename="/mogoljohnleeportfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
    <div>
    <Footer />
    </div>
   </>
  )
}
export default App
