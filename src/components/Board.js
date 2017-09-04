import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Square black>
        <Knight/>
      </Square>
    );
  }
};

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};
