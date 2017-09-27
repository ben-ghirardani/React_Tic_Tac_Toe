import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

  constructor (props) {
    super(props);
  }

  

  render(){
    return(
      <div className="board">
        <Square id="0" selectedPositions={this.props.selectedPositions} turn={this.props.turn} playerPlayed={this.props.playerPlayed}/>
        <Square id="1" selectedPositions={this.props.selectedPositions} turn={this.props.turn} playerPlayed={this.props.playerPlayed}/>
        <Square id="2" selectedPositions={this.props.selectedPositions} turn={this.props.turn} playerPlayed={this.props.playerPlayed}/>
        <br/>
        <Square id="3" selectedPositions={this.props.selectedPositions} turn={this.props.turn} playerPlayed={this.props.playerPlayed}/>
        <Square id="4" selectedPositions={this.props.selectedPositions} turn={this.props.turn} playerPlayed={this.props.playerPlayed}/>
        <Square id="5" selectedPositions={this.props.selectedPositions} turn={this.props.turn} playerPlayed={this.props.playerPlayed}/>
        <br/>
        <Square id="6" selectedPositions={this.props.selectedPositions} turn={this.props.turn} playerPlayed={this.props.playerPlayed}/>
        <Square id="7" selectedPositions={this.props.selectedPositions} turn={this.props.turn} playerPlayed={this.props.playerPlayed}/>
        <Square id="8" selectedPositions={this.props.selectedPositions} turn={this.props.turn} playerPlayed={this.props.playerPlayed}/>
      </div>
      )
  }

}

export default Board;