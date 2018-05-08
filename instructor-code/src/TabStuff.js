import React, { Component } from 'react';

export class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      activeTabIndex: 0,
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export class TabPane extends Component {
  render() {
    return (
      <div>{this.props.children}</div>      
    );
  }
}