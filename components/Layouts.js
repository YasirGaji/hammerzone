import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layouts({ title, description, children }) {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontsSize: '1.6rem',
        fontWeigtht: 400,
        margin: '1rem 0',
      },

      h2: {
        fontsSize: '1.4rem',
        fontWeigtht: 400,
        margin: '1rem 0',
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - HammerZone` : 'HammerZone'}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>HammerZone</Typography>
              </Link>
            </NextLink>

            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>

              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <Container className={classes.main}>{children}</Container>

      <footer className={classes.footer}>
        <Typography>HammerZone | All rights reserved.</Typography>
      </footer>
    </div>
  );
}
