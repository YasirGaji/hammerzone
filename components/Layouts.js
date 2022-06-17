import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layouts({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>HammerZone</title>
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>HammerZone</Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>{children}</Container>

      <footer className={classes.footer}>
        <Typography>HammerZone | All rights reserved.</Typography>
      </footer>
    </div>
  );
}
