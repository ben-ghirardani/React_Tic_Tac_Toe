import React, {Component} from 'react';

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: "-"
    }
  }

  handleClick(event){
  if(this.state.display!= "-"){
    return
  }
  if(this.props.turn === 1) {
    this.setState({display: "X"})
    } else {
      this.setState({display: "O"})
  }
  var index = Math.floor(this.props.id);
  
  this.props.playerPlayed(index);

  }



  render(){
    return(
      <button onClick={this.handleClick.bind(this)} >
        {this.state.display}
      </button>
      )
  }

}

export default Square;