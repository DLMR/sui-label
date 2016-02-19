import React from 'react';

export default class Label extends React.Component {
  static get propTypes(){
    return {
      literal: React.PropTypes.string
    };
  }

  render() {
    return (
      <span className='sui-Label'>{this.props.literal}</span>
    );
  }
}
