import React from 'react';
import cx from 'classnames';

export default class Label extends React.Component {
  static get propTypes(){
    return {
      literal: React.PropTypes.string,
      class: React.PropTypes.string
    };
  }

  render() {
    const classes = cx('sui-Label', {
      [`${this.props.class}`]: !!this.props.class
    });

    return (
      <span className={classes}>{this.props.literal}</span>
    );
  }
}
