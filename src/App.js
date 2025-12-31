import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mentors from './components/Mentors';
import SocialMedia from './components/SocialMedia';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
// <AddCourse />
    return (
        <>
      <Navbar />
      <Hero />
      <Mentors />
      <SocialMedia />
      <Courses />
      <Skills />
      {/* <Projects /> */}
      {/* <About /> */}
      <Contact />
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