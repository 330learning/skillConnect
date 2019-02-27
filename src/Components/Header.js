import React, { Component } from 'react';
import './Header.css';
import { withStyles } from '@material-ui/core';
import PropTypes from "prop-types";
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';

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
                <Link to="/Learn"><p id="title">skillConnect</p></Link>
            </div>
        )
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);