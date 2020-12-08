import React from 'react';
import '../App.css'


import { Link } from 'react-router-dom';
import HomepageForm from '../Components/HomepageForm';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));




export default function NavBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <div className={classes.root}>
        <AppBar className="Navbar" position="static">
          <Toolbar>

            <div>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* List of menus */}
                <MenuItem></MenuItem>

              </Menu>
            </div>
            <Typography variant="h6" className={classes.title}>
              MINECRAFT
          </Typography>
            <div>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <h4>QUESTIONS</h4>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/aboutus">ABOUT US</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/support">SUPPORT</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/faq">FAQ</Link></MenuItem>

              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        <HomepageForm />
      </div>

    </div>

  );
}


