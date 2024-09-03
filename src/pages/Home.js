import React, { useState } from 'react';
import Register from '../components/Register';
import AddCourse from '../components/AddCourse';
import Courses from './Courses';
import UserDetails from '../components/UserDetails';
import { Button, Grid, Box, Typography, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Correct import statement
import video1Thumbnail from '../images/charOccurence.jpg.png';
import video1Thumbnai2 from '../images/shallow.jpg.png';

import './Home.css';
import LogoRow from '../components/LogoRow';
import QuizPage from './QuizPage';
import SearchCourses from '../components/SearchCourses';

const Home = () => {
  const [abc, setabc] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function
  const videos = [
    {
      id: 'XsyYTZzgw04&t=20s', // Replace with actual YouTube video ID
      title: 'Occurence of each character in a string',
      thumbnail:video1Thumbnail
    },
    {
      id: 'yR24ydmTVPo&t=35s', // Replace with actual YouTube video ID
      title: 'Shallow and Deep comparison.',
      thumbnail:video1Thumbnai2
    },
    // {
    //  id: 'VIDEO_ID_3', // Replace with actual YouTube video ID
    //   title: 'Video Title 3',
    // },
  ];

  const handleClick = () => {
    setabc(true);
    navigate('/register'); 
  };

  const handleShowUserDetails = () => {
    setShowUserDetails(!showUserDetails);
    navigate('/users'); 
  };


  

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h3" className="gradient-text" gutterBottom>
        Code Soft
      </Typography>
        <SearchCourses />
      <Grid container spacing={2} justifyContent="center" className="btnCon">
        {!abc && (
          <Grid item>
            <Button
              id="btn"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Register User
            </Button>
          </Grid>
        )}
       
      </Grid>

      <Box mt={3}>
        {showUserDetails && <UserDetails />}
        {abc && <Register setabc={setabc} />}
        <Courses />
      </Box>

      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Featured Videos
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <Card>
                <CardActionArea component="a" href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
                  <CardMedia
                    component="img"
                    height="230"
                    image={video.thumbnail}
                    alt={video.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {video.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <LogoRow />
    </Box>
  );
};

export default Home;

//Kindly check the quizpage.js file and make the relevant code changes
// {!showUserDetails && (
//     <Grid item>
//       <Button
//         id="btn"
//         variant="contained"
//         color="primary"
//         onClick={handleShowUserDetails}
//       >
//         Show Users
//       </Button>
//     </Grid>
//   )}