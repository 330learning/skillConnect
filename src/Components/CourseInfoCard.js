import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
  card: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 140,
  },
  content: {
    height: 180,
  }
};

class MediaCard extends React.Component {
  render() {
    const { classes } = this.props;
    const [open, setOpen] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);

    const handleOpen = function () {
      setOpen(true);
    }

    function handleClose() {
      setOpen(false);
    }

    function handleConfirm() {
      setConfirm(true);
      setOpen(false);
    }

    function handleConfirmClose() {
      setConfirm(false);
    }

    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={this.props.image}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography component="p">
                {this.props.intro}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleOpen}>
              Enroll
        </Button>
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>

        {/* first dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure you want to enroll?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              By enrolling in this course, you agree to terms and conditions of this application.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              No
          </Button>
            <Button onClick={handleConfirm} color="primary" autoFocus>
              Yes
          </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={confirm}
          onClose={handleConfirmClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You've been successfully enrolled in this course.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirmClose} color="primary">
              OK
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);