import React, { Component } from 'react';

export default class WithTime extends Component {
    render() {
        return (
            <div>
                <h1> With time </h1>
                {this.props.render('game time')}

                </div>
            
        );
    }
}