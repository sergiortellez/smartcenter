import { useState, useEffect } from 'react'
//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//styles
import './App.css'

//components
import NavBar from './components/NavBar/NavBar'
import NavMenu from './components/NavMenu/NavMenu'
import Footer from './components/Footer/Footer'
import WelcomePrompt from './components/WelcomePrompt/WelcomePrompt';

//hooks
import useCampus from './hooks/useCampus';

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

  const { campus } = useCampus();

  //is the app running on a mobile browser?
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767.98 && /Mobi|Android/i.test(navigator.userAgent))

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767.98 && /Mobi|Android/i.test(navigator.userAgent));
  };

  //is necessary to check the size of the window on resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  //Selecting a campus is mandatory to access the app so if there's no campus on the context, the user will be prompted to select one
  if (!campus) return <WelcomePrompt />;

  return (
    <>
      <BrowserRouter>
        {!isMobile && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/dpi/lectura" element={<Lectura />} />
          <Route path="/dpi/reporte/:id" element={<Reporte />} />
          <Route path="/presenciales" element={<Presenciales />} />
          <Route path="/pyc/catalogo" element={<Catalogo />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path='/experiencias/:id' element={<Video />} />
          <Route path="*" element={<h1>Página no encontrada.</h1>} />
        </Routes>
        <Footer />
        {isMobile && <NavMenu />}
      </BrowserRouter>
    </>
  )
}

export default App
