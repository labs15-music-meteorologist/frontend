import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import "../../../App.css";
import axios from 'axios';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const MenuListComposition = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("ds_songs");
    props.history.push("/logout");
  };
  // console.log("logout props", props)
  // console.log("this.props.deviceid WTF", props.deviceid)
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  function toggleLightDark() {
    var element = document.getElementById("sideBarLD");
    element.classList.toggle("sideBarL");
    var element1 = document.getElementById("sideBarLD1");
    element1.classList.toggle("sideBarL");
    var element2 = document.getElementById("sideBarLD2");
    element2.classList.toggle("sideBarL");
    var element3 = document.getElementById("radar1");
    element3.classList.toggle("radarL");
    var element4 = document.getElementById("playInfoLD");
    element4.classList.toggle("playInfoL");
    var element5 = document.getElementById("mainBarLD");
    element5.classList.toggle("mainBarL");
    var element6 = document.getElementById("mainBarLD1");
    element6.classList.toggle("mainBarL");
    var element7 = document.getElementById("songLD");
    element7.classList.toggle("mainBarL");
    var element8 = document.querySelector("#playpause");
    element8.classList.toggle("playpauseL");
    var element9 = document.querySelector("#prev");
    element9.classList.toggle("nextPrevL");
    var element10 = document.querySelector("#next");
    element10.classList.toggle("nextPrevL");
    var element11 = document.querySelector("#x");
    element11.classList.toggle("x");
    var element12 = document.querySelector("#heart");
    element12.classList.toggle("heart");
    var element13 = document.querySelector(".MuiLinearProgress-colorPrimary");
    element13.classList.toggle("progressBarEmpty");
    var element14 = document.querySelector(".MuiLinearProgress-barColorPrimary");
    element14.classList.toggle("progressBarFull");
    var element15 = document.querySelectorAll(".playicon2");
    element15.forEach(element => element.classList.toggle("playiconL"));
    var element16 = document.querySelector(".playlisticon");
    element16.classList.toggle("playlistblack");
  }

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ width: 20 }}
        >
          <i className="arrow down" style={{ width: 15, marginBottom: 3 }} />
        </Button>
        <Popper className="drop" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', left: '-50px', background: 'transparent' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem className="copybar" onClick={toggleLightDark}>Dark/Light Mode
                      </MenuItem>
                    <MenuItem className="copybar">
                      Your Spotify ID <br />
                      <input className="copytext" type="text" value={props.navBarProps.spotifyId.id} id="myInput" />
                    </MenuItem>
                    <MenuItem className="copybar" onClick={logout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default withRouter(MenuListComposition);