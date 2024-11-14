"use client";

import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";

const introStyles = {
  backgroundColor: "#f7f7f7",
  padding: "50px 0",
  textAlign: "center",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const Intro = () => {

  return (
    <Box sx={introStyles}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "#333" }}>
              Welcome to DigiHandler
            </Typography>
            <Typography variant="h6" sx={{ marginTop: 2, color: "#555" }}>
              We are a leading software development company focused on creating
              innovative solutions for businesses across various industries.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2, color: "#666" }}>
              Our mission is to help businesses streamline their operations and
              scale with cutting-edge technology.
            </Typography>
            <Box sx={{ marginTop: 4 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: "10px 25px", fontWeight: "bold" }}
                href="/contact"
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="/images/digital.png"
              alt="Software Company"
              style={{
                maxWidth: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
