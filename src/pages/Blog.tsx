import React from "react";
import { Box, Typography } from "@mui/material";

const Blog = () => (
  <Box sx={{ p: 4, textAlign: "center" }}>
    <Typography variant="h4" color="primary" gutterBottom>
      Blog
    </Typography>
    <Typography>Build progress and historical records here.</Typography>
  </Box>
);

export default Blog;
