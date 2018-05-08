import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Button extends Component {
  render() {
    const { type} = this.props;


    function getStyle(){
      switch(type){
        case 'danger':
        return {
          color:'red',
          backgrund:'grey',
        }
        case 'default':
        return{
          color:'grey',
          backgrund:'transparent',
        }
        case 'primary':
        return{
          color:'white',
          backgrund:'blue',
        }
      }
    }

    
    return (
      <div>
      <button style={getStyle()}>{this.props.children}</button>
      
  
</div>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['danger', 'dashed', 'primary', 'default']),
  active:PropTypes.oneOf(['yes','no'])
};
