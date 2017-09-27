import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

  render(){
    return(
      <div className="board">
        <Square/>
        <Square/>
        <Square/>
        <br/>
        <Square/>
        <Square/>
        <Square/>
        <br/>
        <Square/>
        <Square/>
        <Square/>
      </div>
      )
  }

}

export default Board;