import React from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  CardMedia,
  makeStyles
} from "@material-ui/core";
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
            <CardMedia
              component="img"
              image="https://i.ibb.co/9bG7SN4/erik.jpg"
            />
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
                  href="https://www.linkedin.com/in/erikfsandoval/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={3}>
            {/* <CardMedia
              component="img"
              image="https://i.ibb.co/1bbn7hc/nicholas.jpg"
            /> */}
            <CardMedia
              component="img"
              image="https://i.ibb.co/mSQ6kvt/joshua.jpg"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>
                  Johsua Edgerton
                </Typography>
                <Typography className={classes.position}>
                  Web Developer
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.linkedin.com/in/joshua-edgerton/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={3}>
            <CardMedia
              component="img"
              image="https://i.ibb.co/J2qTxh4/corey.jpg"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Cory Ortega</Typography>
                <Typography className={classes.position}>
                  Web Developer
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.linkedin.com/in/cory-ortega-b2167819b/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={3}>
            <CardMedia
              component="img"
              image="https://i.ibb.co/4Fx0Dg1/april.jpg"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>April Clemente</Typography>
                <Typography className={classes.position}>
                  Web Developer
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.linkedin.com/in/aprilclements/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardMedia
              component="img"
              image="https://i.ibb.co/PDn94nJ/47346292.jpg"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>
                  Gurpreet Dhaliwal
                </Typography>
                <Typography className={classes.position}>
                  Web Developer
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.linkedin.com/in/gdhaliwaldev/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardMedia
              component="img"
              image="https://i.ibb.co/1bbn7hc/nicholas.jpg"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Nick Truson</Typography>
                <Typography className={classes.position}>
                  Web Developer
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.linkedin.com/in/nicholas-truson-167599191/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardMedia
              component="img"
              image="https://i.ibb.co/Nr7Tyxp/Xander.jpg"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Xander Bennet</Typography>
                <Typography className={classes.position}>
                  Data Scientist
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.linkedin.com/in/xander-bennett/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardMedia
              component="img"
              image="https://i.ibb.co/vXFphtf/riley.jpg"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Riley Pence</Typography>
                <Typography className={classes.position}>
                  Data Scientist
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.linkedin.com/in/riley-pence-16368a194/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardMedia
              component="img"
              image="https://i.ibb.co/6N2rKL6/zhenya.png"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>
                  Zhenya Warshavsky
                </Typography>
                <Typography className={classes.position}>
                  Data Scientist
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.linkedin.com/in/zwarshavsky/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardMedia
              component="img"
              image="https://i.ibb.co/6BQwdSM/T4-JUEB3-ME-UMV7-CL10-D-15c133820281-512.jpg"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Mugil Choi</Typography>
                <Typography className={classes.position}>
                  Data Scientist
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.linkedin.com/in/mugil-choi-941687194/"
                >
                  <span className={classes.buttonText}>Contact</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardMedia
              component="img"
              image="https://i.ibb.co/CsWhHsf/Rachel2.jpg"
            />
            <Grid style={{ marginTop: "3px" }} container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.name}>Rachel Windsor</Typography>
                <Typography className={classes.position}>
                  UX/UI Designer
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.buttonArrow}
                  variant="contained"
                  color="secondary"
                  href="https://www.rachellanwindsor.com/"
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
