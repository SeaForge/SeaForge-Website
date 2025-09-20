import React from "react";
import MainLayout from "./components/layout/MainLayout";
import AppRoutes from "./routes";

const App = () => {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
};

export default App;
