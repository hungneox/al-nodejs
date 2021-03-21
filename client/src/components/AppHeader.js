import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const AppHeader = () => (
  <AppBar position='static'>
    <Toolbar>
      <Typography variant='h6' color='inherit'>
        <Link style={{ color: '#fff', textDecoration: 'none' }} to='/'>
          Alpha-sense
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
