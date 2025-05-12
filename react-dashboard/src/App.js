import React from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ChakraProvider>
      <Box minH="100vh">
        <Grid
          templateColumns="250px 1fr"
          templateRows="60px 1fr"
          h="100vh"
        >
          <Box gridColumn="1 / -1">
            <Header />
          </Box>
          <Box>
            <Sidebar />
          </Box>
          <Box p={4} bg="gray.50">
            <Dashboard />
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
