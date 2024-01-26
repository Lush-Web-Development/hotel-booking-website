// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="warning">
      <Container>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" color="inherit">
                © 2023 LUXURY Hotel. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" color="inherit" align="right">
                Address: 123 Main Street, Colombo, Sri Lanka
              </Typography>
              <Typography variant="body1" color="inherit" align="right">
                Phone: +94 91 565 8956
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
