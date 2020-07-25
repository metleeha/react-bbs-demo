import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import CustomAppBar from '../components/common/CustomAppBar';
import Footer from '../components/common/Footer';
import UserList from '../components/admin/UserList';

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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflowX: 'auto',
    flexDirection: 'column',
    minWidth: 1240
  },
  Container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
}));

export default function AdminPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* AppBar unit */}
      <CustomAppBar />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          M2m Demo
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          this is admin page.
        </Typography>
      </Container>      
      {/* End hero unit */}
      {/* UsreList unit */}
      <Container maxWidth="lg" className={classes.Container}>
          <Grid container spacing={3}>
            {/* Member List */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <UserList />
              </Paper>
            </Grid>
          </Grid>
      </Container>
      {/* End UsreList unit */}
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}