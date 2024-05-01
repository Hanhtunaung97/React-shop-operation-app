import React, { createContext, useState } from "react";

export const dataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [createDrawer, setCreateDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(false);
  const toggleCreateDrawer = () => {
    setCreateDrawer(!createDrawer);
  };
  const toggleEditDrawer = () => {
    setEditDrawer(!editDrawer);
  };
  return (
    <dataContext.Provider
      value={{ createDrawer, toggleCreateDrawer, editDrawer, toggleEditDrawer }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
