import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CustomAppBar from '../components/CustomAppBar';
import Footer from '../components/Footer';

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
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInPage() {
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
          this is login page.
        </Typography>
      </Container>
      {/* End hero unit */}
      {/* Signin Unit */}
      <Container maxWidth="xs" component="main">
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User ID"
                    name="username"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
      </Container>
      {/* End Signin Unit */}
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}