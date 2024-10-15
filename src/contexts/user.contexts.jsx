/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create a User context with default values
export const UserContexts = createContext({
  currentUser: "",
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; // Value to be provided to children

  // Any component (children) can access the currentUser and setCurrentUser via context
  return (
    <UserContexts.Provider value={value}>{children}</UserContexts.Provider>
  );
};
