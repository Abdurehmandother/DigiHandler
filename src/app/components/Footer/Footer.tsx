'use client';

import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const footerStyles = {
  backgroundColor: '#2C3E50',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  marginTop: '40px',
};

const socialIconsStyle = {
  color: '#fff',
  margin: '0 10px',
  cursor: 'pointer',
  '&:hover': {
    color: '#3498db',
  },
};

const Footer = () => {
  return (
    <Box sx={footerStyles}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* About Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              We are a leading software development company, providing tailored solutions for businesses of all sizes.
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>
                Home
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>
                Services
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>
                Blog
              </Link>
              <Link href="/contact" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>
                Contact Us
              </Link>
            </Typography>
          </Grid>

          {/* Social Icons Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Follow Us
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Facebook sx={socialIconsStyle} />
              <Twitter sx={socialIconsStyle} />
              <Instagram sx={socialIconsStyle} />
              <LinkedIn sx={socialIconsStyle} />
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ marginTop: '30px' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} DigiHandler. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
