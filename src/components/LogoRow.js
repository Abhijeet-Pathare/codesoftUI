import React from 'react'
import { Box, Avatar, CardMedia, Typography } from '@mui/material';
import css from '../images/css.png'
import java from '../images/java.png'
import html from '../images/html.png'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import sql from '../images/sql.png'


const logos = [
  { src: java, alt: 'java' },
  { src: react, alt: 'react' },
  { src: javascript, alt: 'javascript' },
  { src: sql, alt: 'sql' },
  { src: html, alt: 'html' },
  { src: css, alt: 'css' }
]

const LogoRow = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2} // Adjust spacing between logos
      p={2} // Padding around the row
    >
      {logos.map((logo, index) => (
        <Box key={index} textAlign="center">
          <Avatar
            src={logo.src}
            alt={logo.alt}
            sx={{
              width: 80,
              height: 80,
              bgcolor: 'transparent',
              border: '2px solid #ddd',
              p: 1
            }}
          />
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            {logo.alt}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default LogoRow
