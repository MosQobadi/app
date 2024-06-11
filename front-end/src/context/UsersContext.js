import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUsers(res.data.users);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const addUser = async (newUser) => {
    try {
      const res = await axios.post("http://localhost:3000/users", newUser);
      setUsers((prevUsers) => [...prevUsers, res.data.user]); // Assuming `res.data.user` is the newly created user
      setCurrentUsers(res.data.user);
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        currentUser,
        getUsers,
        addUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
