import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
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

  const textMap = {
    login: 'Sign In',
    register: 'Sign Up'
  }

  const AuthForm = ({type}) => {
    const classes = useStyles();
    const text = textMap[type];
    return (
          <div className={classes.paper}>
              <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
              </Avatar>
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
                      autoComplete="username"
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
                      autoComplete="new-password"
                  />
                  { type === 'register' && (
                     <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     name="passwordConfirm"
                     label="PasswordConfirm"
                     type="password"
                     id="passwordConfirm"
                     autoComplete="new-password"
                    />
                  )}
                  { type === 'login' ? (
                    <Button
                    href="/login"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                        { text }
                    </Button>
                  ) : (
                    <Button
                      href="/register"
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                  >
                      { text }
                    </Button>
                  )}
                  { type === 'login' && (
                    <Grid container>
                      <Grid item xs>
                      {/* <Link href="#" variant="body2">
                          Forgot password?
                      </Link> */}
                      </Grid>
                      <Grid item>
                      <Link href="/register" variant="body2">
                          {"Don't have an account? Sign Up"}
                      </Link>
                      </Grid>
                    </Grid>
                  )}
              </form>
          </div>
    );
  }

  export default AuthForm;