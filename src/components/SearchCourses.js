import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SearchCourses = () => {
    const [keyword, setKeyword] = useState('');
    const [courses, setCourses] = useState([]);
    const [showTableHeader, setShowTableHeader] = useState(false); // State to control the visibility of the table header

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
            setShowTableHeader(false); // Hide the table header in case of error
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
