import React, { Component } from 'react';

export class Tabs extends Component {
    constructor(){
        super();
        this.state={
            activeTabIndex:0,
        }
    }


  render() {
      const tabToShow = null;
      const childrenToShow = React.Children.toArray(this.props.children)
    return (
        <div>
            <nav>{childrenToShow.map((x,i)=><button onClick={()=>this.setState({activeTabIndex:i})} key={x.props.val}>{x.props.tab} </button>)}
             </nav>
             {childrenToShow[this.state.activeTabIndex]}
        </div>
      
    );
  }
}

export class TabPane extends Component {
  render() {
    return (
        <div>
        {this.props.children}
        </div>
      
    );
  }
}