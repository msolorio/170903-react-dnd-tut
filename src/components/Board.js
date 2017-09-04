import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  renderSquare(i) {

    const x = i % 8;
    const y = Math.floor(i / 8);
    // if x + y is an odd number
    const black = (x + y) % 2 === 1;
    const [knightX, knightY] = this.props.knightPosition;
    const squareContents = (x === knightX && y === knightY) ? <Knight /> : null;

    return (
      <div key={i}
        style={{ width: '12.5%', height: '12.5%' }}>
        <Square black={black}>
          {squareContents}
        </Square>
      </div>
    );
  }

  render() {
    const squares = [];

    for (let i=0; i<64; i++) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      {squares}
    </div>
    );
  }
};

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};
