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
    console.log("logout props", props)
    console.log("this.props.deviceid", props.deviceid)
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

    function transferHere() {
      axios.put(
        'https://api.spotify.com/v1/me/player',
        {
          "device_ids": [props.deviceid]
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        }
      )
     }
    
    
    return (
      <div className={classes.root}>
      <div>
        <Button
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  style={{width: 20}}
              >
                  <i className="arrow down" style={{width: 15, marginBottom: 3}}/>
        </Button>
              <Popper className="drop" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', left: '-30px' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem className="copybar" onClick={transferHere}>Transfer Playback</MenuItem>
                    <MenuItem className="copybar">
                      Your Spotify ID <br />
                      <input className="copytext" type="text" value={props.navBarProps.spotifyId.id} id="myInput"/>
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