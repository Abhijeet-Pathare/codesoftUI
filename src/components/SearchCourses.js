import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SearchCourses = () => {
    const [keyword, setKeyword] = useState('');
    const [courses, setCourses] = useState([]);
    const [showTableHeader, setShowTableHeader] = useState(false); // State to control the visibility of the table header

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

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/courses/search?keyword=${keyword}`);
            
            if (response.status === 200 && response.data.length > 0) {
                setCourses(response.data);
                setShowTableHeader(true); // Show the table header if the response is ok and contains data
            } else {
                setCourses([]);
                setShowTableHeader(false); // Hide the table header if there is no data
            }
        } catch (error) {
            console.error("Error searching courses:", error);
            console.log(courses.length);
            setCourses(staticData);
            if(staticData.length >0){
                setShowTableHeader(true);
            }else{
                setShowTableHeader(false);
            }
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {/* Center the TextField and Button horizontally */}
            <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
                {/* Wrapping TextField and Button in a nested Grid for better alignment */}
                <Grid item>
                    <TextField
                        label="Search Courses"
                        variant="outlined"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        style={{ marginRight: 8 }} // Adds some space between the text field and the button
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Grid>
            </Grid>
            {/* Display the table of courses */}
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table>
                        {showTableHeader && ( // Conditional rendering of the table header
                            <TableHead>
                                <TableRow>
                                    <TableCell>Course Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Fee</TableCell>
                                    <TableCell>Start Date</TableCell>
                                    <TableCell>End Date</TableCell>
                                </TableRow>
                            </TableHead>
                        )}
                        <TableBody>
                            {courses.map((course) => (
                                <TableRow key={course.id}>
                                    <TableCell>{course.courseName}</TableCell>
                                    <TableCell>{course.description}</TableCell>
                                    <TableCell>{course.fee}</TableCell>
                                    <TableCell>{new Date(course.startDate).toLocaleDateString()}</TableCell>
                                    <TableCell>{new Date(course.endDate).toLocaleDateString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default SearchCourses;
