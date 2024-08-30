import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';


const Register = (props) => {
    //const [abc, setabc] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function

    const handleClick = () => {
        //setabc(false);
        navigate('/register'); 
      };

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form values:', formValues);
        let requestPayload = {
                "username": formValues.username,
                "password": formValues.password,
                "email": formValues.email,
                "roleId": 2
        }
        console.log(requestPayload);
        try {
            const response = await axios.post("http://localhost:8080/api/users/register", requestPayload);
            console.log(response);
            alert('User registered successfully!'); // Show success alert
            navigate('/'); // Navigate back to Home after successful registration
        } catch (error) {
            console.error(error);
            alert('An error occurred while registering the user.'); // Show error alert
        }
        //setabc(false);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
                <Typography variant="h6" gutterBottom>
                    Registration Form
                </Typography>
                <TextField
                    label="Username"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formValues.password}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox name="terms" checked={formValues.terms} onChange={handleChange} />}
                        label="I agree to the terms and conditions"
                    />
                </FormGroup>
                <Button onClick={handleClick} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Register
