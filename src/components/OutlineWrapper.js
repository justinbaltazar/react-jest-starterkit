import React from 'react';
import PropTypes from 'prop-types';
// import className from 'classnames';
import './OutlineWrapper.scss';
// import styles from './OutlineWrapper.scss';

/**

    Outline Wrapper

    Creates a wrapper for an element that adds a blue outline on
    hover and handles callbacks on click in/click out behavior

    @props {bool} hovered - Component is hovered
    @props {bool} selected - Component is selected
    @props {node} children

*/

const OutlineWrapper = ({ hovered, selected, children }) => (
//   <div styleName={className('container', { hovered }, { selected })}>
  <div styleName="container">
    {children}
  </div>
);

OutlineWrapper.propTypes = {
  hovered: PropTypes.bool,
  selected: PropTypes.bool,
};

OutlineWrapper.defaultProps = {
  hovered: false,
  selected: false,
};

export default OutlineWrapper;
