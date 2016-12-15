import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Drawer, MenuItem, RaisedButton } from 'material-ui';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <div>
        <RaisedButton label="Menù" onClick={this.handleToggle} />

        <Drawer open={this.state.open}>
          <MenuItem><Link to="/" onClick={this.handleToggle}>Home</Link></MenuItem>
          <MenuItem><Link to="/slider" onClick={this.handleToggle}>Slider</Link></MenuItem>
          <MenuItem><Link to="/charts" onClick={this.handleToggle}>Charts</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Menu;