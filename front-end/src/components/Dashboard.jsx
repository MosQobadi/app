// src/pages/Dashboard.js
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import UsersContext from "../context/UsersContext";

const Dashboard = () => {
  const { currentUser } = useContext(UsersContext);

  return (
    <Box component="section">
      <Typography variant="h3" className="text-green-700">
        Hello {currentUser.firstName}
      </Typography>
      <Typography variant="p" className="text-green-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium
        hic assumenda odit dolorem est animi excepturi tempore ullam dolor,
        similique perferendis, quia totam expedita vel tempora dicta distinctio
        incidunt.
      </Typography>
    </Box>
  );
};

export default Dashboard;
