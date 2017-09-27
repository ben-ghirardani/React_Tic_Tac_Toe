import React, {Component} from 'react';
import Board from '../components/Board.jsx';
import Square from '../components/Square.jsx';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    }
  }

  changeTurn(){
    if(this.state.turn === 1){
      this.setState( { turn: 2 } )
    } else {
      this.setState( { turn: 1 } )
    }
  }



  render() {
    return (
      <section className="game">
        Welcome to Tic-Tac-Toe<br/>
        Player {this.state.turn} turn
        <Board turn={this.state.turn} changeTurn={this.changeTurn}/>
      </section>
    )
  }


}

export default GameContainer