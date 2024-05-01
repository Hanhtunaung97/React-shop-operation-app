import React from 'react'
import Container from './components/Container'
import Header from './components/header'
import TableGroup from './components/TableGroup'
import CreateDrawer from './components/CreateDrawer'
import EditDrawer from './components/EditDrawer'

const App = () => {
  return (
    <Container>
      <Header/>
      <TableGroup/>
      <CreateDrawer/>
      <EditDrawer/>
    </Container>
  )
}

export default App