import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          marginTop: 8,
          paddingBottom: 8,
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          About Us
        </Typography>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Who We Are
          </Typography>
          <Typography variant="body1" paragraph>
            We are a passionate team of developers and designers dedicated to
            building innovative and user-friendly software solutions. Our
            mission is to provide cutting-edge technology that helps businesses
            grow and succeed.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Our Values
          </Typography>
          <Typography variant="body1" paragraph>
            Integrity, innovation, and customer-centricity are at the heart of
            everything we do. We are committed to delivering high-quality
            products that exceed client expectations while maintaining a
            transparent and collaborative approach throughout the process.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Our Team
              </Typography>
              <Typography variant="body1" paragraph>
                Our team is made up of talented professionals with expertise in
                various fields, including software development, UI/UX design,
                and project management. We work together to create solutions
                that are both functional and aesthetically pleasing.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Our Approach
              </Typography>
              <Typography variant="body1" paragraph>
                We follow an agile development process, ensuring that we remain
                flexible and responsive to changes in requirements. By focusing
                on collaboration and iteration, we aim to build scalable and
                sustainable solutions for our clients.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
