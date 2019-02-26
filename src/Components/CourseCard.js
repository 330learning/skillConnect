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
import { Renderer } from 'jss';


const styles = {
  card: {
    minWidth: 325,
    margin: 20,
  },
  media: {
    height: 10,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    color: "black",
  },
};

class CourseCard extends React.Component {
  render(){
    const { classes } = this.props;
    const heartColor = this.props.heartColor;
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{ title: classes.title }}
          avatar={
            <Avatar className={classes.avatar} style={{ backgroundColor: "black" }}>
              {this.props.letter}
            </Avatar>
          }
          title={this.props.title}
          style={{ backgroundColor: "#f6f6f6", fontSize: "30px" }}
        />
        <CardMedia
          image={this.props.image}
          title="Math"
          style={{ height: 100, paddingTop: '56%' }}
        />

        <CardActions style={{ backgroundColor: "#f6f6f6" }}>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon className={classes.heart} />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon color='primary' />
          </IconButton>
          <IconButton
            aria-label="Show more"
          >
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
