import React from "react";
import styled from "styled-components";
import MusicLogo from '../assets/sounddrip.svg';
import mobileNav from './dashboard/element-styles/MobileNav.js'
import '../App.css';
import {
  Grid,
  Typography,
  Container,
  Button,
  CardMedia,
  makeStyles
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MobileNav from "./dashboard/element-styles/MobileNav.js";
// import HomepageNav from "./HomepageNav.js"
// import useMediaQuery from "@material-ui/core/useMediaQuery";

const HomepageNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-decoration: none;
  margin-left: 5%;
  padding-top: 2%;
  margin-bottom: 2%;
  height: 60px;
  width: 550px;
  color: #9DA4AF;
  font-size: 19px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #151619;
  height: 66px;
  width: 100%;
  font-size: 18px;
  position: relative;
  bottom: 0;
  margin-top: 500px;
`;

const NavbarLinks = styled.a`
    text-decoration: none;
    color: #9DA4AF;
    font-size: 20px;

    &:hover {
        color: white;
      }
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // margin: "50px 0"
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
      <MobileNav/>
      <HomepageNavbar>
        <a href="/"><img src={MusicLogo}/></a>
        <NavbarLinks href="/about">How it works?</NavbarLinks>
        <NavbarLinks href="/team">Team</NavbarLinks>
        <NavbarLinks href="https://github.com/Lambda-School-Labs/Music-Meteorologist-fe">Github</NavbarLinks>
      </HomepageNavbar>
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
      <Footer><p> © Copyright 2019, SoundDrip </p></Footer>
    </div>
  );
}
