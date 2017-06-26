import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser({id, first_name, last_name, avatar}) {
    return (
      <li className="list-group-item" key={id}>
        <img src={avatar} />
        <span className="label label-defualt label-pill pull-xs-right">
          {first_name} {last_name}
        </span>
        {name}
      </li>
    );
  }

  render() {
    return (
      <div>
        <h4>User profiles</h4>
        <ul className="list-group">
          {this.props.users.map(this.renderUser)}
        </ul>
      </div>
    );
  }
}

export default connect((state => state), actions)(App);
