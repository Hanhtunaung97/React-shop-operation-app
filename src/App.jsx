import React, { useContext } from "react";
import Container from "./components/Container";
import Header from "./components/header";
import TableGroup from "./components/TableGroup";
import CreateDrawer from "./components/CreateDrawer";
import EditDrawer from "./components/EditDrawer";
import { dataContext } from "./contexts/DataContext";

const App = () => {
  const { editDrawer } = useContext(dataContext);
  return (
    <Container>
      <Header />
      <TableGroup />
      <CreateDrawer />
      {editDrawer && <EditDrawer />}
    </Container>
  );
};

export default App;
