import React, { useEffect , useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

function CourseTable() {

  const [courses,setCourses] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the courses",error);
      })
  },[]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Course Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Fee</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {courses.map(course=>(
          <TableRow>
               <TableCell id={course.id}>{course.id}</TableCell>
               <TableCell>{course.courseName}</TableCell>
               <TableCell>{course.description}</TableCell>
               <TableCell>{course.fee}</TableCell>
               <TableCell>{course.startDate}</TableCell>
               <TableCell>{course.endDate}</TableCell>
          </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CourseTable;
