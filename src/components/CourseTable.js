import React, { useEffect , useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, colors } from '@mui/material';
import axios from 'axios';
import { red } from '@mui/material/colors';

function CourseTable() {

  const [courses,setCourses] = useState([]);

  const staticData = [
    {
      id: 1,
      courseName: 'Java Fundamentals',
      description: 'An introductory course on Java programming covering basic syntax, OOP concepts, and standard libraries.',
      fee: 6500,
      startDate: '2024-09-10',
      endDate: '2024-10-15'
    },
    {
      id: 2,
      courseName: 'Advanced SQL',
      description: 'Learn advanced SQL queries, database optimization techniques, and data modeling.',
      fee: 4500,
      startDate: '2024-09-15',
      endDate: '2024-10-30'
    },
    {
      id: 3,
      courseName: 'React JS for Beginners',
      description: 'A comprehensive course on React.js, including components, state management, and hooks.',
      fee: 10000,
      startDate: '2024-09-20',
      endDate: '2024-11-05'
    },
    {
      id: 4,
      courseName: 'HTML & CSS Essentials',
      description: 'Master the basics of HTML and CSS to create responsive and visually appealing web pages.',
      fee: 3000,
      startDate: '2024-09-25',
      endDate: '2024-10-20'
    }
  ];
  
  
  useEffect(()=>{
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the courses",error);
        setCourses(staticData);
      })
  },[]);

  return (
    <>
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
    <h3 style={{color:'red'}}>
      Note : This data is only for testing purposes.
      Date's yet to be confirmed.</h3>
    </>
  );
}

export default CourseTable;
