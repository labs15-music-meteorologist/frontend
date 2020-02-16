import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Container, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "50px 0"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  heading: {
    fontWeight: "bold",
    fontSize: "52px",
    color: "#fff"
  },
  paragraph: {
    color: "#fff",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px"
    }
  },
  imageBackground: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: theme.spacing(20),
    background: "#2E3138"
  },
  name: {
    color: "#fff"
  },
  position: {
    color: "#2E3138"
  },
  buttonArrow: {
    width: "42px",
    minWidth: "42px",
    float: "right",
    marginTop: "5px;",
    [theme.breakpoints.up("xs")]: {
      float: "unset",
      marginTop: "0px",
      width: "100%"
    }
  },
  buttonText: {
    paddingRight: "7px",
    [theme.breakpoints.down("xs")]: {
      display: "inline !important"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  }
}));

export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.heading}>Our Team</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography className={classes.paragraph}>
              We're a team comprised of developers, designers and data
              scientist. Connect with us below, we're all open to job
              opportunities
            </Typography>
          </Grid>
        </Grid>

        <Grid style={{ padding: "80px 0" }} container spacing={5}>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.imageBackground} />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Erik Sandoval</Typography>
                <Typography className={classes.position}>Team Lead</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
