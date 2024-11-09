import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
} from "@mui/material";

interface Service {
  title: string;
  shortDescription: string;
  longDescription: string[];
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    shortDescription: "Building responsive websites.",
    longDescription: [
      "Custom website development (using platforms like WordPress, Shopify, or custom coding)",
      "E-commerce website design and development",
      "Landing pages and conversion-optimized sales funnels",
      "Responsive and mobile-friendly website designs",
      "Website performance optimization (speed, security, UX)",
    ],
    imageUrl: "/images/web.jpeg",
  },
  {
    title: "Search Engine Optimization",
    shortDescription: "Custom mobile solutions.",
    longDescription: [
      "On-page SEO (keyword optimization, meta tags, and content structure)",
      "Off-page SEO (backlink building, guest posting, and outreach)",
      "Technical SEO (site speed optimization, schema markup, and indexing)",
      "Local SEO for UK-based businesses to boost visibility",
      "Comprehensive SEO audits and performance analysis",
    ],
    imageUrl: "/images/seo.jpeg",
  },
  {
    title: "Social Media Marketing",
    shortDescription: "Design that captivates.",
    longDescription: [
      "Social media strategy and campaign management (Facebook, Instagram, LinkedIn, etc.)",
      "Paid social advertising (Facebook Ads, Instagram Ads, LinkedIn Ads)",
      "Content creation, scheduling, and engagement management",
      "Social media analytics, reporting, and performance optimization",
      "AI-powered social media analysis to enhance targeting and engagement",
    ],
    imageUrl: "/images/social (1).jpeg",
  },
  {
    title: "AI-Powered Solutions",
    shortDescription: "Boost your online presence.",
    longDescription: [
      "AI chatbot development for automated customer support and lead generation",
      "Natural Language Processing (NLP) for content analysis and sentiment detection",
      "Machine learning models for predictive analytics (e.g., sales forecasting, customer behavior)",
      "Computer vision applications (e.g., image recognition, product tagging for e-commerce)",
      "AI-driven content recommendations and personalization engines",
    ],
    imageUrl: "/images/AI.jpeg",
  },
  {
    title: "Data Science & Analytics",
    shortDescription: "Building responsive websites.",
    longDescription: [
      "Data analysis and visualization using tools like Python, R, and Power BI",
      "Business intelligence dashboards and real-time reporting",
      "Data mining for actionable business insights",
      "Customer segmentation and data-driven digital marketing strategies",
      "Predictive analytics for marketing campaigns and trend forecasting",
    ],
    imageUrl: "/images/coding.jpg",
  },
  {
    title: "Digital Marketing & Advertising",
    shortDescription: "Custom mobile solutions.",
    longDescription: [
      "Google Ads (PPC) and Bing Ads management for lead generation",
      "Conversion Rate Optimization (CRO) for better ROI",
      "Email marketing campaigns, automation, and analytics",
      "AI-enhanced targeting and retargeting for paid campaigns",
      "Marketing automation tools for seamless workflow management",
    ],
    imageUrl: "/images/coding.jpg",
  },
  {
    title: "Content Creation",
    shortDescription: "Design that captivates.",
    longDescription: [
      "SEO-friendly content creation (blogs, website copy, product descriptions)",
      "Social media content, ad copy, and video scripts",
      "AI-powered content analysis to optimize for engagement",
      "Email newsletters and customer engagement content",
    ],
    imageUrl: "/images/coding.jpg",
  },
  {
    title: "Automation & Optimization",
    shortDescription: "Boost your online presence.",
    longDescription: [
      "Marketing automation (email campaigns, social media scheduling)",
      "Workflow automation using AI tools (e.g., Zapier, Make)",
      "Automated SEO and digital marketing performance reporting",
      "Predictive maintenance for websites and applications",
    ],
    imageUrl: "/images/coding.jpg",
  },
  {
    title: "Web Maintenance & Support",
    shortDescription: "Boost your online presence.",
    longDescription: [
      "Regular website updates, backups, and security checks",
      "Troubleshooting, bug fixing, and performance enhancements",
      "AI-based monitoring for proactive issue resolution",
    ],
    imageUrl: "/images/coding.jpg",
  },
  {
    title: "Branding & Graphic Design",
    shortDescription: "Boost your online presence.",
    longDescription: [
      "Logo design, branding packages, and marketing collateral",
      "Social media graphics, banners, and ad creatives",
      "Infographics and visual content for enhanced brand communication",
    ],
    imageUrl: "/images/coding.jpg",
  },
];

const cardStyles = {
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s",
  width: "100%",
  height: { xs: "250px", sm: "300px" },
  perspective: "1000px",
  "&:hover": {
    transform: "rotateY(180deg)",
  },
};

const frontBackStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  backfaceVisibility: "hidden",
  border: "2px solid #ccc",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
};

const metallicGradient = {
  background: "linear-gradient(135deg, #b8c6db, #f5f7fa)",
};

const backMetallicGradient = {
  background: "linear-gradient(135deg, #283048, #859398)",
};

const Services = () => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4 } }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box sx={cardStyles}>
              {/* Front Side */}
              <Card sx={{ ...frontBackStyles, ...metallicGradient }}>
                <CardMedia
                  component="img"
                  image={service.imageUrl}
                  alt={service.title}
                  sx={{ height: "65%" }}
                />
                <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                      color: "#283048",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      color: "#5b6475",
                    }}
                  >
                    {service.shortDescription}
                  </Typography>
                </CardContent>
              </Card>

              {/* Back Side */}
              <Card
                sx={{
                  ...frontBackStyles,
                  ...backMetallicGradient,
                  transform: "rotateY(180deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 2,
                }}
              >
                <List>
                  {service.longDescription.map((point, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        color: "white",
                        background: 'black',
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      }}
                    >
                      • {point}
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
