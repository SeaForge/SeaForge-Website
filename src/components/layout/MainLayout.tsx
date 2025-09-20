import React from "react";
import { Box } from "@mui/material";
import Navbar from "../common/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          minHeight: "calc(100vh - 64px)", // subtract navbar height approx
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
