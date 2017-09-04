import React from 'react';
import './Square.css';

export default function Square(props) {

  const fill = props.black ? 'black' : 'white';

  return <div className={`square square-${fill}`}>{props.children}</div>;
}
