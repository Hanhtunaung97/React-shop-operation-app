import React, { createContext, useState } from "react";

export const dataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [createDrawer, setCreateDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(false);
  const [consoles, setConsole] = useState([]);
  const addNewConsole = (newConsole) => {
    setConsole([...consoles, newConsole]);
  };
  const deleteConsole = (id) => {
    setConsole(consoles.filter((console) => console.id != id));
  };
  const toggleCreateDrawer = () => {
    setCreateDrawer(!createDrawer);
  };
  const toggleEditDrawer = () => {
    setEditDrawer(!editDrawer);
  };
  return (
    <dataContext.Provider
      value={{
        createDrawer,
        toggleCreateDrawer,
        editDrawer,
        toggleEditDrawer,
        consoles,
        setConsole,
        addNewConsole,
        deleteConsole,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
