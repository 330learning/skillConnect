import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import {NavLink, Redirect} from "react-router-dom";


const styles = {
  root: {
    alignSelf:"stretch", 
    backgroundColor:"black",
  },
  appBar: {
    backgroundColor:"#8b9dc3" 
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0,
  },
  logout: {
      
  },
  toolbar : {
    flexDirection:"row",
    justifyContent:"space-between",
  },
  toolbarNoBack : {
    flexDirection:"row",
    justifyContent:"flex-end",
  }
};

const navLinkStyle = {
    textDecoration:'none',
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    color:"white",
    alignSelf:'center',
};

function ButtonAppBar(props) {
  var noBack = props.noBack
  const { classes } = props;

  if (noBack) {
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.toolbarNoBack}>
            <NavLink to='/' activeStyle = {navLinkStyle}>
              <Button color="inherit">Logout</Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
        <NavLink to={props.to} activeStyle = {navLinkStyle}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Icon>{props.Icon}</Icon>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.lastPage}
          </Typography>
          </NavLink>
          <NavLink to='/' activeStyle = {navLinkStyle}>
            <Button color="inherit">Logout</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ButtonAppBar);
