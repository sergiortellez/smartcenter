import { useState, useEffect } from 'react'
//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//styles
import './App.css'

//components
import NavBar from './components/NavBar/NavBar'
import NavMenu from './components/NavMenu/NavMenu'

//Pages

import Home from './pages/home/Home'
import Citas from './pages/citas/Citas'
import Lectura from './pages/dpi/Lectura'
import Reporte from './pages/dpi/Reporte'
import Experiencias from './pages/experiencias/Experiencias'
import Video from './pages/experiencias/Video'
import Catalogo from './pages/pyc/Catalogo'
import Presenciales from './pages/presenciales/Presenciales'


function App() {

  //is the app running on a mobile browser?
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767.98 && /Mobi|Android/i.test(navigator.userAgent))

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767.98 && /Mobi|Android/i.test(navigator.userAgent));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        {!isMobile && <NavBar />}
        {isMobile && <NavMenu />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/dpi/lectura" element={<Lectura />} />
          <Route path="/dpi/reporte" element={<Reporte />} />
          <Route path="/presenciales" element={<Presenciales />} />
          <Route path="/pyc/catalogo" element={<Catalogo />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path='/experiencias/:id' element={<Video />} />
          <Route path="*" element={<h1>Página no encontrada.</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
