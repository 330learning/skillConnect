import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from "react-router-dom";



const styles = {
  card: {
    minWidth: 325,
    margin: 20,
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    color: "black",
  },
  avatar : {
    backgroundColor: "black",
  },
  expand : {
    alignSelf:"flex-end"
  }
};

class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={favColor:"grey"}
  }


  toggleColor() {
    if (this.state.favColor == "grey") {
      this.setState({favColor:'red'})
    } else {
      this.setState({favColor:'grey'})
    }
  }
  


  render(){
    const { classes } = this.props;

    return (

      <Card className={classes.card}>
        <NavLink to= {this.props.to} style={{ textDecoration: 'none' }}>
        <CardHeader
          classes={{ title: classes.title }}
          avatar={
            <Avatar className={classes.avatar}>
              {this.props.letter}
            </Avatar>
          }
          title={this.props.title}
        />
        <CardMedia
          image={this.props.image}
          className={classes.media}
        />
        </NavLink>
        <CardActions>
          <IconButton onClick={()=>this.toggleColor()}>
            <FavoriteIcon style={{color:this.state.favColor}}/>
          </IconButton>
          <IconButton>
            <ShareIcon color='primary' />
          </IconButton>
          <IconButton className={classes.expand}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

      </Card>
    );
  }
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseCard);
