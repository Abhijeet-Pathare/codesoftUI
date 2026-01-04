import { useEffect } from 'react';
import './App.css';
// import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
// import Projects from './sections/Projects';
// import Skills from './sections/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsAppFloater from './components/WhatsAppFloater';
import Footer from './components/Footer';
import Services from './sections/Services';
// import SocialMedia from './components/SocialMedia';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // <AddCourse />
  return (
    <>
      <Navbar />
      <Hero />

      {/* <SocialMedia /> Removed as per user request (redundant with Navbar) */}
      <Services />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <About /> */}
      <Contact />
      <WhatsAppFloater />
      <Footer />
    </>


  );
}

export default App;

// {/* <Router basename='codesoftUI'>
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Default Route */}
//         <Route path="/courses" element={<Courses />} /> {/* Second Page Route */}
//         <Route path="/addCourses" element={<AddCourse />} />
//         <Route path="/users" element={<UserDetails />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router> */}