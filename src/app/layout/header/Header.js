import React, {Component} from 'react';
import ActionPanel from "./action-panel/ActionPanel";
import './Style.scss';

class Header extends Component {
  render () {
    return (
      <header>
        <ActionPanel />
      </header>
    );
  }
}

export default Header;
