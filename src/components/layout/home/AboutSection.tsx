import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  alpha,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  Engineering,
  Code,
  Settings,
  Group,
  Speed,
  Visibility,
} from "@mui/icons-material";

const AboutSection = () => {
  const theme = useTheme();

  const expertiseItems = [
    {
      icon: <Engineering sx={{ fontSize: 40 }} />,
      title: "Mechanical Engineering",
      description: "Precision hull design and propulsion systems",
    },
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: "Software Development",
      description: "Advanced autonomy and navigation algorithms",
    },
    {
      icon: <Settings sx={{ fontSize: 40 }} />,
      title: "Electrical Systems",
      description: "Robust power management and sensor integration",
    },
    {
      icon: <Group sx={{ fontSize: 40 }} />,
      title: "Project Management",
      description: "Coordinated team execution and timeline management",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: "background.default",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(to right, transparent, ${alpha(
            theme.palette.primary.main,
            0.3
          )}, transparent)`,
        },
      }}
    >
      <Container>
        <Grid container spacing={8} alignItems="center">
          {/* Use a div with grid classes as a workaround */}
          <div className="MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h2"
                color="primary"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  mb: 3,
                  background:
                    theme.palette.mode === "light"
                      ? "linear-gradient(135deg, #00435c 0%, #006687 100%)"
                      : "linear-gradient(135deg, #a3e7ff 0%, #80d4ff 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Navigating the Future of Maritime Autonomy
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                }}
              >
                The Humber Roboboat Team represents the cutting edge of
                autonomous surface vehicle technology, combining innovation with
                practical engineering excellence.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    color: "text.primary",
                  }}
                >
                  We are a multidisciplinary team of engineering and technology
                  students dedicated to designing and building competitive
                  autonomous surface vehicles (ASVs). Our team brings together
                  expertise across mechanical engineering, electrical systems,
                  software development, and project management to create
                  innovative solutions for modern maritime challenges.
                </Typography>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    color: "text.primary",
                  }}
                >
                  This year, we're pioneering advancements in vehicle autonomy,
                  enhancing navigation algorithms, and implementing
                  state-of-the-art computer vision systems for superior object
                  detection and avoidance capabilities.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Speed sx={{ color: "primary.main", mr: 1 }} />
                  <Typography variant="body2" fontWeight={600}>
                    +40% Efficiency
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Visibility sx={{ color: "primary.main", mr: 1 }} />
                  <Typography variant="body2" fontWeight={600}>
                    Advanced Vision AI
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                component={RouterLink}
                to="/vehicle"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: 2,
                  background:
                    theme.palette.mode === "light"
                      ? "linear-gradient(135deg, #00435c 0%, #006687 100%)"
                      : "linear-gradient(135deg, #a3e7ff 0%, #80d4ff 100%)",
                  boxShadow: `0 4px 20px ${alpha(
                    theme.palette.primary.main,
                    0.3
                  )}`,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 6px 25px ${alpha(
                      theme.palette.primary.main,
                      0.4
                    )}`,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Explore Our Vessel
              </Button>
            </Box>
          </div>

          {/* Second grid item */}
          <div className="MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
            <Box sx={{ position: "relative", zIndex: 1 }}>
              {/* Video/Media Section */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: `0 20px 40px ${alpha(
                    theme.palette.primary.main,
                    0.2
                  )}`,
                  mb: 4,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, ${alpha(
                      theme.palette.primary.main,
                      0.1
                    )} 0%, transparent 100%)`,
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://placehold.co/600x400/00435c/white/png?text=ASV+Video+Placeholder"
                  alt="Our Autonomous Surface Vehicle in action"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      backgroundColor: alpha(theme.palette.accent.main, 0.9),
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                        backgroundColor: theme.palette.accent.main,
                      },
                    }}
                  >
                    <Box
                      component="svg"
                      viewBox="0 0 24 24"
                      sx={{
                        width: 40,
                        height: 40,
                        fill: theme.palette.primary.main,
                        ml: 1,
                      }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: `linear-gradient(to top, ${alpha(
                      "#000",
                      0.7
                    )} 0%, transparent 100%)`,
                    color: "white",
                    p: 3,
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    ASV In Action
                  </Typography>
                  <Typography variant="body2">
                    Watch our autonomous surface vehicle during testing
                  </Typography>
                </Box>
              </Box>

              {/* Expertise Cards - Horizontal layout for desktop */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                  overflowX: { md: "auto" },
                  pb: { md: 2 },
                  "&::-webkit-scrollbar": {
                    height: 6,
                  },
                  "&::-webkit-scrollbar-track": {
                    background: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: 3,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: alpha(theme.palette.primary.main, 0.3),
                    borderRadius: 3,
                  },
                }}
              >
                {expertiseItems.map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      minWidth: { md: 200 },
                      textAlign: "center",
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "background.paper",
                      boxShadow: `0 4px 16px ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: `0 8px 24px ${alpha(
                          theme.palette.primary.main,
                          0.2
                        )}`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: "0 !important" }}>
                      <Avatar
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: "primary.main",
                          width: 50,
                          height: 50,
                          mx: "auto",
                          mb: 1,
                        }}
                      >
                        {item.icon}
                      </Avatar>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        gutterBottom
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </div>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
