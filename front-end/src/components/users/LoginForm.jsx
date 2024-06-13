import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import UsersContext from "../../context/UsersContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { loginUser, loggedInUser } = useContext(UsersContext);
  const { handleSubmit, control, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const submit = (loggedInUser) => {
    loginUser(loggedInUser);
    console.log(loggedInUser);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "auto",
        mt: 5,
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        Login
      </Typography>

      {errorMessage && (
        <Typography variant="body1" color="error">
          {errorMessage}
        </Typography>
      )}

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Email" variant="outlined" required />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            variant="outlined"
            type="password"
            required
          />
        )}
      />

      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
