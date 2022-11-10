import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Grid container alignItems={'center'}>
      <CssBaseline/>
      <Navbar/>
      <Outlet/>
    </Grid>
  );
}

export default App;
