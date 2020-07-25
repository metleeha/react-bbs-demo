import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeaderContainer from '../components/common/HeaderContainer';
import Footer from '../components/common/Footer';
import FeaturedPost from '../components/post/FeaturedPost';

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
    overflow: 'auto',
    flexDirection: 'column',
  },
  Container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
}));

const featuredPosts = [
  {
    title: 'Arrcus Expands Network Services Spanning Hybrid Clouds',
    date: 'July 23',
    description:
      'Arrcus has added virtualized distributed routing (VDR) and multi-cloud networking (MCN) capabilities to ArcOS'
  },
  {
    title: 'Revisiting 2020 Cloud Predictions in Light of COVID-19',
    date: 'July 20',
    description:
      'Back when the technology industry made its cloud predictions for 2020, no one forecasted the impending impact of COVID-19.'
  },
  {
    title: 'OpenAI’s new GPT-3 language explained in under 3 minutes',
    date: 'Jul 20',
    description:
      'With GPT-3, I built a layout generator where you just describe any layout you want, and it generates the JSX code for you.'
  },
  {
    title: 'Evolving Tech Stack Enables High Performance Ecommerce',
    date: 'Jul 23',
    description:
      'The technologies powering the web and mobile applications never stop evolving. Each new phase creates opportunities for businesses.'
  },

];

export default function BoardPage() {
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
          this is board page.
        </Typography>
      </Container>      
      {/* End hero unit */}
      {/* Posts List unit */}
      <Container maxWidth="md" className={classes.Container}>
          <Grid container spacing={3}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
          </Grid>
      </Container>
      {/* End UsreList unit */}
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}