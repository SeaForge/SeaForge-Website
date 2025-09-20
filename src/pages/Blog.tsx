import {
  Box,
  Container,
  Typography,
  Card,
  Chip,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import {
  CalendarToday,
  Person,
  ArrowForward,
  Engineering,
  Update,
  Announcement,
  Code,
} from "@mui/icons-material";

const Blog = () => {
  const theme = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "Hull Design Finalized for SeaForge Prototype",
      excerpt:
        "After extensive testing, we've finalized the hull design that provides optimal stability and efficiency in various water conditions.",
      date: "2024-01-15",
      author: "Sarah Chen",
      category: "Engineering",
      readTime: "4 min read",
      image: "https://placehold.co/600x400/00435c/white/png?text=Hull+Design",
    },
    {
      id: 2,
      title: "Navigation System Integration Complete",
      excerpt:
        "Successfully integrated the advanced GPS and obstacle avoidance system with our custom control software. Initial tests show promising results.",
      date: "2024-01-08",
      author: "Alex Thompson",
      category: "Software",
      readTime: "3 min read",
      image: "https://placehold.co/600x400/00435c/white/png?text=Navigation",
    },
    {
      id: 3,
      title: "New Sponsorship: OceanTech Marine Joins",
      excerpt:
        "We're excited to announce OceanTech Marine as our newest Gold sponsor, providing cutting-edge maritime technology and expertise.",
      date: "2024-01-02",
      author: "Marcus Brown",
      category: "News",
      readTime: "2 min read",
      image: "https://placehold.co/600x400/00435c/white/png?text=Sponsorship",
    },
    {
      id: 4,
      title: "First Successful Autonomous Test Run",
      excerpt:
        "Major milestone achieved! SeaForge completed its first fully autonomous navigation test with 98% accuracy in course following.",
      date: "2023-12-20",
      author: "David Kim",
      category: "Update",
      readTime: "5 min read",
      image: "https://placehold.co/600x400/00435c/white/png?text=Test+Run",
    },
    {
      id: 5,
      title: "Computer Vision Module Implementation",
      excerpt:
        "Implemented advanced computer vision algorithms for object detection and classification. Early results show excellent detection rates.",
      date: "2023-12-12",
      author: "Priya Sharma",
      category: "Software",
      readTime: "4 min read",
      image: "https://placehold.co/600x400/00435c/white/png?text=CV+Module",
    },
    {
      id: 6,
      title: "Team Expansion: New Members Welcome",
      excerpt:
        "Welcomed 5 new team members from various disciplines, strengthening our capabilities in mechanical design and software development.",
      date: "2023-12-05",
      author: "Jessica Miller",
      category: "News",
      readTime: "3 min read",
      image:
        "https://placehold.co/600x400/00435c/white/png?text=Team+Expansion",
    },
  ];

  const categories = [
    { name: "All", count: 6, icon: <Update /> },
    { name: "Engineering", count: 1, icon: <Engineering /> },
    { name: "Software", count: 2, icon: <Code /> },
    { name: "News", count: 2, icon: <Announcement /> },
    { name: "Update", count: 1, icon: <Update /> },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Engineering":
        return <Engineering sx={{ fontSize: 16 }} />;
      case "Software":
        return <Code sx={{ fontSize: 16 }} />;
      case "News":
        return <Announcement sx={{ fontSize: 16 }} />;
      default:
        return <Update sx={{ fontSize: 16 }} />;
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              mb: 2,
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(135deg, #00435c 0%, #006687 100%)"
                  : "linear-gradient(135deg, #a3e7ff 0%, #80d4ff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Project Blog
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              fontWeight: 400,
              fontSize: { xs: "1.1rem", md: "1.2rem" },
            }}
          >
            Follow our journey as we design, build, and innovate in autonomous
            maritime technology
          </Typography>
        </Box>

        {/* Category Filter */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          {categories.map((category) => (
            <Chip
              key={category.name}
              icon={category.icon}
              label={`${category.name} (${category.count})`}
              variant="outlined"
              sx={{
                px: 2,
                py: 1,
                borderColor: alpha(theme.palette.primary.main, 0.2),
                backgroundColor:
                  category.name === "All"
                    ? alpha(theme.palette.primary.main, 0.1)
                    : "transparent",
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                },
              }}
            />
          ))}
        </Box>

        {/* Blog Posts Grid */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            mb: { xs: 6, md: 8 },
          }}
        >
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                backgroundColor: "background.paper",
                borderRadius: 3,
                boxShadow: `0 4px 20px ${alpha(
                  theme.palette.primary.main,
                  0.1
                )}`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 32px ${alpha(
                    theme.palette.primary.main,
                    0.2
                  )}`,
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: { xs: "100%", md: 300 },
                  height: { xs: 200, md: "auto" },
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={post.image}
                  alt={post.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1, p: { xs: 3, md: 4 } }}>
                {/* Category */}
                <Chip
                  icon={getCategoryIcon(post.category)}
                  label={post.category}
                  size="small"
                  sx={{
                    mb: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                />

                {/* Title */}
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    mb: 2,
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </Typography>

                {/* Excerpt */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  {post.excerpt}
                </Typography>

                {/* Metadata */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <CalendarToday
                      sx={{ fontSize: 16, color: "text.secondary" }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {formatDate(post.date)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Person sx={{ fontSize: 16, color: "text.secondary" }} />
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {post.author}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {post.readTime}
                  </Typography>
                </Box>

                {/* Read More Button */}
                <Button
                  variant="text"
                  endIcon={<ArrowForward />}
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    px: 0,
                    "&:hover": {
                      color: "primary.dark",
                      transform: "translateX(4px)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Load More Button */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
          >
            Load More Posts
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
