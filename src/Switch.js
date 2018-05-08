import React, { Component } from 'react';
import './ButtonStyle.css';
import PropTypes from 'prop-types';

export default class Switch extends Component {

  

    render() {
    const { active} = this.props;
    
    function onChange(){
        switch(active){
          case 'yes':
            return 
            {
              backgrund:'blue'
              textAlign:'right'
            }
            case 'no':
            return{
              background:'red',
              textAlign:'left'
            }
        }
  
      }
        return (
          <div  style={onChange()}>
            <button> {this.props.children} Switch </button>
      
          </div>
            
        );
    }
}
Switch.propTypes={
  active:PropTypes.oneOf('yes','no')
}