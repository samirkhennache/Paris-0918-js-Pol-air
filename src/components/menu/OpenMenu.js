import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import { Link } from 'react-router-dom'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class OpenMenu extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  Accueil = props => <Link to="/" {...props} />
  BlockForcastMeteo = props => <Link to="/BlockForcastMeteo" {...props} />
  Pollution = props => <Link to="/HistoriquePollution" {...props} />
render() {
  const { classes } = this.props;

  const sideList = (
    <div className={classes.list}>
      <ListItem component={this.Accueil} button>Accueil</ListItem>
      <ListItem component={this.BlockForcastMeteo} button>Prévisions météo</ListItem>
      <ListItem component ={this.Pollution} button>Historique pollution</ListItem>
    </div>
  );

  return (
    <div>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
        onClick={this.toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        open={this.state.left}
        onClose={this.toggleDrawer("left", false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer("left", false)}
          onKeyDown={this.toggleDrawer("left", false)}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
    );
  }
}

OpenMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OpenMenu);
