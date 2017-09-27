import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

  constructor (props) {
    super(props);
    this.state= {
      selectedPositions: Array(9).fill(null)
    }
  }

  playerPlayed (index) {
    var positions = this.state.selectedPositions;
    if(this.props.turn === 1){
      positions[index] = "X"
    } else {
      positions[index] = "O"
    }
    this.setState({selectedPositions: positions});
    this.props.changeTurn(positions)

  }

  render(){
    return(
      <div className="board">
        <Square id="0" selectedPositions={this.state.selectedPositions} turn={this.props.turn} playerPlayed={this.playerPlayed.bind(this)}/>
        <Square id="1" selectedPositions={this.state.selectedPositions} turn={this.props.turn} playerPlayed={this.playerPlayed.bind(this)}/>
        <Square id="2" selectedPositions={this.state.selectedPositions} turn={this.props.turn} playerPlayed={this.playerPlayed.bind(this)}/>
        <br/>
        <Square id="3" selectedPositions={this.state.selectedPositions} turn={this.props.turn} playerPlayed={this.playerPlayed.bind(this)}/>
        <Square id="4" selectedPositions={this.state.selectedPositions} turn={this.props.turn} playerPlayed={this.playerPlayed.bind(this)}/>
        <Square id="5" selectedPositions={this.state.selectedPositions} turn={this.props.turn} playerPlayed={this.playerPlayed.bind(this)}/>
        <br/>
        <Square id="6" selectedPositions={this.state.selectedPositions} turn={this.props.turn} playerPlayed={this.playerPlayed.bind(this)}/>
        <Square id="7" selectedPositions={this.state.selectedPositions} turn={this.props.turn} playerPlayed={this.playerPlayed.bind(this)}/>
        <Square id="8" selectedPositions={this.state.selectedPositions} turn={this.props.turn} playerPlayed={this.playerPlayed.bind(this)}/>
      </div>
      )
  }

}

export default Board;