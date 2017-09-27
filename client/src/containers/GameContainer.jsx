import React, {Component} from 'react';
import Board from '../components/Board.jsx';
import Square from '../components/Square.jsx';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPositions: Array(9).fill(null),
      turn: "a",
      winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    }
  }

  render() {
    return (
      <section className="game">
        Welcome to Tic-Tac-Toe
        <Board/>
      </section>
    )
  }


}

export default GameContainer