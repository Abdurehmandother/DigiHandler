import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

interface Service {
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: 'Web Development',
    shortDescription: 'Building responsive websites.',
    longDescription: 'We specialize in creating fast, responsive websites tailored to meet your business needs.',
    imageUrl: '/images/coding.jpg',
  },
  {
    title: 'Mobile App Development',
    shortDescription: 'Custom mobile solutions.',
    longDescription: 'We develop iOS and Android apps that are user-friendly and high-performing.',
    imageUrl: '/images/coding.jpg',
  },
  {
    title: 'UI/UX Design',
    shortDescription: 'Design that captivates.',
    longDescription: 'Our team creates designs that provide seamless user experiences and captivate users.',
    imageUrl: '/images/coding.jpg',
  },
  {
    title: 'Digital Marketing',
    shortDescription: 'Boost your online presence.',
    longDescription: 'We offer SEO, content marketing, and social media management to grow your brand.',
    imageUrl: '/images/coding.jpg',
  },
];

const cardStyles = {
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  width: '100%',
  height: '300px',
  perspective: '1000px', // Adds 3D depth
  '&:hover': {
    transform: 'rotateY(180deg)',
  },
};

const frontBackStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  backfaceVisibility: 'hidden',
  border: '2px solid #ccc', // Metallic border
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
};

const metallicGradient = {
  background: 'linear-gradient(135deg, #b8c6db, #f5f7fa)',
};

const backMetallicGradient = {
  background: 'linear-gradient(135deg, #283048, #859398)',
};

const Services = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={cardStyles}>
              {/* Front Side */}
              <Card sx={{ ...frontBackStyles, ...metallicGradient }}>
                <CardMedia component="img" image={service.imageUrl} alt={service.title} />
                <CardContent>
                  <Typography variant="h6" gutterBottom style={{ color: '#283048' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#5b6475' }}>
                    {service.shortDescription}
                  </Typography>
                </CardContent>
              </Card>

              {/* Back Side */}
              <Card
                sx={{
                  ...frontBackStyles,
                  ...backMetallicGradient,
                  transform: 'rotateY(180deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                }}
              >
                <Typography variant="body2" align="center" style={{ color: '#f5f7fa' }}>
                  {service.longDescription}
                </Typography>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
