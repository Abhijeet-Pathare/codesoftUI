import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const AddCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');
    const [fee, setFee] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const courseData = {
            courseName: courseName,
            description: description,
            fee: parseFloat(fee),
            startDate: startDate,
            endDate: endDate,
        };

        axios.post('http://localhost:8080/api/courses', courseData)
            .then(response => {
                console.log('Course added successfully:', response.data);
                alert('Course added successfully!');
                // Clear the form
                setCourseName('');
                setDescription('');
                setFee('');
                setStartDate('');
                setEndDate('');
            })
            .catch(error => {
                console.error('There was an error adding the course!', error);
                alert('Failed to add course. Please try again.');
            });
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Add New Course
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Course Name"
                    fullWidth
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    margin="normal"
                    required
                />
                <TextField
                    label="Description"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    margin="normal"
                    required
                />
                <TextField
                    label="Fee"
                    type="number"
                    fullWidth
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                    margin="normal"
                    required
                />
                <TextField
                    label="Start Date"
                    type="date"
                    fullWidth
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <TextField
                    label="End Date"
                    type="date"
                    fullWidth
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Add Course
                </Button>
            </form>
        </Container>
    );
}

export default AddCourse
