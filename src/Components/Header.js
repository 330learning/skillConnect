import React, { Component } from 'react';
import './Header.css';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div id="header">
                <p id="title">skillConnect</p>
                <Tabs
                    style={{ marginTop: "40px" }}
                >
                    <Link to="/Learn"><Tab label="Learn" style={{ float: "right", color: "white"}} /></Link>
                    <Link to="/Teach"><Tab label="Teach" style={{ float: "right", color: "white"}} /></Link>
                    <Link to="/Profile"><Tab label="Profile" style={{ float: "right", color: "white" }} /></Link>
                </Tabs>
            </div>
        )
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(styles)(Header);