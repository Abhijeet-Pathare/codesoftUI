import React from 'react'
import Button from '@mui/material/Button';
import CourseTable from '../components/CourseTable';
import { useNavigate } from 'react-router-dom'; // Correct import statement
import { useState } from 'react';
import UserDetails from '../components/UserDetails';
import { Box } from '@mui/material';

const Courses = () => {
   const [flag, setFlag] = useState(false);
   const navigate = useNavigate(); // Initialize navigate function

   function handleClick() {
      setFlag(!flag);
      navigate('/courses'); // Navigate to the Courses route
   }



   return (
      <div>
         <Box display="flex"
            justifyContent="center"
            alignItems="center" >
      <Button onClick={handleClick}
            variant="contained" color="primary"
         >
            Course Details
         </Button>
      </Box>
      
        { flag && <CourseTable /> }
       
    </div >
  )
}

export default Courses
