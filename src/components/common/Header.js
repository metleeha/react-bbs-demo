import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Header = ({ user, onLogout }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            IBM
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="/" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="/users" className={classes.link}>
              Admin
            </Link>
            <Link variant="button" color="textPrimary" href="/board" className={classes.link}>
              BBS
            </Link>
          </nav>
          {user ? (
            <div>
            <Button variant="text" color="primary">
              {user.username}
            </Button>
            <Button onClick={onLogout} href="/" color="primary" variant="contained" className={classes.link}>
                LogOut
            </Button>
            </div>
          ):(
            <Button href="/login" color="primary" variant="contained" className={classes.link}>
                Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;