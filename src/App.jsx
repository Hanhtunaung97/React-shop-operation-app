import React, { useContext } from "react";
import Container from "./components/Container";
import TableGroup from "./components/TableGroup";
import CreateDrawer from "./components/CreateDrawer";
import EditDrawer from "./components/EditDrawer";
import { dataContext } from "./contexts/DataContext";
import Head from "./components/Head";


const App = () => {
  const { editDrawer } = useContext(dataContext);
  return (
    <Container>
      <Head/>
      <TableGroup />
      <CreateDrawer />
      {editDrawer && <EditDrawer />}
    </Container>
  );
};

export default App;
