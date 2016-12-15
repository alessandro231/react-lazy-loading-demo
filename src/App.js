import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';
import Menu from './components/Menu'

const showMenu = () => {
  console.log('ciao');
};

const App = (props) => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="Palma Conf"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={<Menu />}
      />
      {props.children}
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;