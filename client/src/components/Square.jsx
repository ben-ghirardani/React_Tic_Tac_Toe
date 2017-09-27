import React, {Component} from 'react';

class Square extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   display: "-"
    // }
    // const baseState = this.state;
  }

  handleClick(event){
    // if(this.state.display!= "-"){
    //   return
    // }
    // if(this.props.turn === 1) {
    //   this.setState({display: "X"})
    //   } else {
    //     this.setState({display: "O"})
    // }
    var index = Math.floor(this.props.id);
    this.props.playerPlayed(index);
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)} >
        {this.props.selectedPositions[this.props.id]}
      </button>
    )
  }

}

export default Square;

// {this.state.display}