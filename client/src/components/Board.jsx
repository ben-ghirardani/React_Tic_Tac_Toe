import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

  render(){
    console.log(this.props)
    return(
      <div className="board">
        <Square selectedPositions={this.props.selectedPositions} turn={this.props.turn} />
        <Square selectedPositions={this.props.selectedPositions} turn={this.props.turn}/>
        <Square selectedPositions={this.props.selectedPositions} turn={this.props.turn}/>
        <br/>
        <Square selectedPositions={this.props.selectedPositions} turn={this.props.turn}/>
        <Square selectedPositions={this.props.selectedPositions} turn={this.props.turn}/>
        <Square selectedPositions={this.props.selectedPositions} turn={this.props.turn}/>
        <br/>
        <Square selectedPositions={this.props.selectedPositions} turn={this.props.turn}/>
        <Square selectedPositions={this.props.selectedPositions} turn={this.props.turn}/>
        <Square selectedPositions={this.props.selectedPositions} turn={this.props.turn}/>
      </div>
      )
  }

}

export default Board;