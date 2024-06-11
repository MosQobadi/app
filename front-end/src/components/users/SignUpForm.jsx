import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import UsersContext from "../../context/UsersContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const { addUser } = useContext(UsersContext);
  const { handleSubmit, control } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const signUpUser = async (newUser) => {
    try {
      await addUser(newUser);
      setErrorMessage(null); // Clear any previous error messages
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(signUpUser)}
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
        {/* {users.map((user) => {
          return (
            <div key={user._id}>
              <h4>{user.firstName}</h4>
            </div>
          );
        })} */}
        Sign Up
      </Typography>

      {errorMessage && (
        <Typography variant="body1" color="error">
          {errorMessage}
        </Typography>
      )}

      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="First Name"
            variant="outlined"
            required
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Last Name" variant="outlined" required />
        )}
      />

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
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUpForm;
