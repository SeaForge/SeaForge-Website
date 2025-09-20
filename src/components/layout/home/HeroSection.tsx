import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useThemeContext } from "../../../hooks/useThemeContext";

const HeroSection = () => {
  const theme = useTheme();
  const { mode } = useThemeContext();

  // Water-themed gradient based on current theme
  const gradient =
    mode === "light"
      ? "linear-gradient(135deg, #00435c 0%, #006687 50%, #0088a7 100%)"
      : "linear-gradient(135deg, #0a2e42 0%, #0d3a54 50%, #104a68 100%)";

  // Water wave SVG for the bottom of the hero
  const WaterWaveDivider = () => (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        transform: "rotate(180deg)",
      }}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: 60,
          display: "block",
        }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={theme.palette.background.default}
        ></path>
      </svg>
    </Box>
  );

  // Floating bubbles animation
  const FloatingBubbles = () => (
    <>
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: "-20px",
            backgroundColor: alpha(
              mode === "light" ? "#a3e7ff" : "#d1ffff",
              0.3
            ),
            borderRadius: "50%",
            animation: `floatUp ${15 + (i % 10)}s infinite ease-in-out`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.3 + (i % 3) * 0.2,
            width: 5 + (i % 10),
            height: 5 + (i % 10),
            left: `${5 + (i % 90)}%`,
            "@keyframes floatUp": {
              "0%": {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0.3 + (i % 3) * 0.2,
              },
              "100%": {
                transform: "translateY(-100vh) rotate(360deg)",
                opacity: 0,
              },
            },
          }}
        />
      ))}
    </>
  );

  return (
    <Box
      sx={{
        width: "100%",
        background: gradient,
        color: "white",
        py: { xs: 10, md: 15 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "80vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${
            mode === "light" ? "a3e7ff" : "d1ffff"
          }' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        },
      }}
    >
      {/* Floating bubbles */}
      <FloatingBubbles />

      {/* Water wave divider at bottom */}
      <WaterWaveDivider />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Humber College Badge */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: theme.palette.accent.main,
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              mb: 0.5,
            }}
          >
            HUMBER COLLEGE
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 3,
              backgroundColor: theme.palette.accent.main,
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Main Title */}
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.8rem", sm: "4rem", md: "5rem" },
            mb: 2,
            textShadow: `0 2px 10px ${alpha("#000", 0.3)}`,
            background: `linear-gradient(135deg, ${
              theme.palette.common.white
            } 0%, ${alpha(theme.palette.common.white, 0.8)} 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Roboboat Team
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h4"
          component="p"
          gutterBottom
          sx={{
            mb: 4,
            opacity: 0.9,
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
            fontWeight: 400,
            maxWidth: "800px",
            mx: "auto",
            textShadow: `0 2px 4px ${alpha("#000", 0.2)}`,
          }}
        >
          Navigating the future of autonomous maritime innovation
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            mt: 5,
          }}
        >
          <Button
            variant="contained"
            color="accent"
            size="large"
            component={RouterLink}
            to="/vehicle"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              borderRadius: 2,
              fontWeight: 600,
              boxShadow: `0 4px 20px ${alpha(theme.palette.accent.main, 0.4)}`,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 6px 25px ${alpha(
                  theme.palette.accent.main,
                  0.5
                )}`,
              },
              transition: "all 0.3s ease",
            }}
          >
            Explore Our Vessel
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            component={RouterLink}
            to="/team"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              borderRadius: 2,
              fontWeight: 600,
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                backgroundColor: alpha("#fff", 0.1),
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Meet The Crew
          </Button>
        </Box>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 50,
              border: `2px solid ${alpha("#fff", 0.5)}`,
              borderRadius: 15,
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 10,
                backgroundColor: "#fff",
                borderRadius: 2,
                position: "absolute",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
                animation: "scroll 2s infinite",
                "@keyframes scroll": {
                  "0%": { opacity: 1, top: 10 },
                  "100%": { opacity: 0, top: 30 },
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
