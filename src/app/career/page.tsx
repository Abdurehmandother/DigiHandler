"use client";

import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const CareerContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const JobCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[3],
}));

const CareerPage = () => {
  const [jobs] = useState([
    {
      title: "Software Engineer",
      description:
        "We are looking for a passionate software engineer to join our team and work on innovative software solutions.",
      requirements:
        "Strong knowledge of JavaScript, React, Node.js, and TypeScript.",
    },
    {
      title: "UI/UX Designer",
      description:
        "We need a creative UI/UX designer to improve our platform's user experience and interface design.",
      requirements:
        "Experience with Figma, Adobe XD, and user-centered design principles.",
    },
    {
      title: "Product Manager",
      description:
        "We are hiring a Product Manager to oversee product development from concept to launch.",
      requirements:
        "Strong communication skills and experience in product lifecycle management.",
    },
  ]);

  return (
    <>
      <Navbar />
      <CareerContainer maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Careers at Our Company
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Join our team and help us build amazing software solutions! We are
          looking for passionate individuals to help us make an impact.
        </Typography>

        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard>
                <CardContent>
                  <Typography variant="h5">{job.title}</Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {job.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Requirements:
                  </Typography>
                  <Typography variant="body2">{job.requirements}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </JobCard>
            </Grid>
          ))}
        </Grid>
      </CareerContainer>
      <Footer />
    </>
  );
};

export default CareerPage;
