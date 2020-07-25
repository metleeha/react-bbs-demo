import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import HeaderContainer from '../components/common/HeaderContainer';
import Footer from '../components/common/Footer';
import LoginForm from '../components/auth/LoginFrom';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
        textDecoration: 'none',
    }
  },
  heroContent: {
    padding: theme.spacing(6, 0, 6),
  },
}));

export default function LogInPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* AppBar unit */}
      <HeaderContainer />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          M2m Demo
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          this is login page.
        </Typography>
      </Container>
      {/* End hero unit */}
      {/* Signin Unit */}
      <Container maxWidth="xs" component="main">
        <LoginForm />
      </Container>
      {/* End Signin Unit */}
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}