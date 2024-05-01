import React, { createContext, useState } from "react";

export const dataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [createDrawer, setCreateDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(false);
  const [consoles, setConsole] = useState([]);
  const [editConsole, setEditConsole] = useState({});
  const addNewConsole = (newConsole) => {
    setConsole([...consoles, newConsole]);
  };
  const deleteConsole = (id) => {
    setConsole(consoles.filter((console) => console.id != id));
  };
  const updateConsole = (editConsole) => {
    setConsole(
      consoles.map((console) => {
        if (console.id === editConsole.id) {
          return editConsole;
        }
        return console;
      })
    );
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
        editConsole,
        setEditConsole,
        updateConsole,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
