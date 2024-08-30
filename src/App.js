import './App.css';
import AddCourse from './components/AddCourse';
import CourseTable from './components/CourseTable';
import Register from './components/Register';
import UserDetails from './components/UserDetails';
import Courses from './pages/Courses';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
// <AddCourse />
    return (
        <>
      
        <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route */}
        <Route path="/courses" element={<Courses />} /> {/* Second Page Route */} 
        <Route path="/addCourses" element={<AddCourse />} />
        <Route path="/users" element={<UserDetails />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
       
        </>
    );
}

export default App;

