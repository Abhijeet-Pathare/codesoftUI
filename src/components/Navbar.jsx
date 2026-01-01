import React, { useState } from 'react';
import './css/Navbar.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'; // Import Button
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typewriter } from 'react-simple-typewriter';
import { motion, useScroll as useScrollFramer } from "framer-motion"; // Rename to avoid conflict with react-scroll if needed, though Link is from react-scroll

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScrollFramer();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: 'Home', id: 'home' },
    { text: 'Courses', id: 'courses' },
    { text: 'Mentors', id: 'mentors' },
    { text: 'Contact', id: 'contact' },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={`#${item.id}`}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Menu + Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className="menu-icon interactive-icon"
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <a href="#home" className="logo gradient-text">Codesoft</a>
        </Box>

        {/* Center Section: Typing Animation */}
        {/* Center Section: Typing Animation */}
        <Box
          sx={{
            flex: 2,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            lineHeight: 1.2
          }}
        >
          <Box component="div" sx={{ fontSize: '1.2rem', fontWeight: 700, color: 'black' }}>
            नमस्कार, मी तुमचा <span style={{ color: '#ff4c60' }}>Tech Guru</span>
          </Box>
          <Box component="div" sx={{ fontSize: '1rem', fontWeight: 500, color: '#333', mt: 0.5 }}>
            <Typewriter
              words={[
                "आम्ही शास्त्रशुद्ध पद्धतीने coding शिकवतो.",
                "Rooted in values, built for the future"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Box>
        </Box>

        {/* Right Section: CTA + Social Icons */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            className="cta-button"
            sx={{
              borderRadius: '20px',
              fontWeight: 'bold',
              textTransform: 'none',
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              display: { xs: 'none', sm: 'block' }
            }}
            href="#contact"
          >
            Join Now
          </Button>

          <IconButton
            component="a"
            href="https://www.instagram.com/codesoft__?igsh=MXNqbXNqbjRuOWUzdw=="
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-icon"
            sx={{ color: '#E1306C' }}
          >
            <InstagramIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.youtube.com/@maharashtrianCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-icon"
            sx={{ color: '#FF0000' }}
          >
            <YouTubeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
}

export default Navbar
