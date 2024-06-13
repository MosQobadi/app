import { createContext, useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const getUsers = async () => {
  //   try {
  //     const res = await axios.get("/users");
  //     setUsers(res.data.users);
  //   } catch (error) {
  //     console.error("Failed to fetch users:", error);
  //   }
  // };

  // const addUser = async (newUser) => {
  //   try {
  //     const res = await axios.post("/singup", newUser);
  //     setUsers((prevUsers) => [...prevUsers, res.data.user]); // Assuming `res.data.user` is the newly created user
  //     setCurrentUsers(res.data.user);
  //   } catch (error) {
  //     console.error("Failed to add user:", error);
  //   }
  // };

  const signupUser = async (newUser) => {
    const res = await axios.post("/signup", newUser, { withCredentials: true });
    setUsers([...users, res.data.user]);
  };

  const loginUser = async (loggedInUser) => {
    const res = await axios.post("/login", loggedInUser, {
      withCredentials: true,
    });

    setLoggedInUser(res.data.user);
    // console.log(res.data.user);
  };

  const logout = async (loggedOutUser) => {
    await axios.delete("/logout", loggedOutUser, { withCredentials: true });
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        loggedInUser,
        // getUsers,
        // addUser,
        signupUser,
        loginUser,
        logout,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
