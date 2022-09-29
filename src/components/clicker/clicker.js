import {Component} from 'react';
import './clicker.css'  ;
import styled from 'styled-components';

class Clicker extends Component {
  state = {
    counter: 0
  }

  onClickButton = ()=>{
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
    let counter = this.state.counter

    const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  `

  const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
    return(
    <div className="Clicker">
      <p> You clicked {counter} times</p>
      <button onClick={() => this.onClickButton()}>click me</button>  
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <TomatoButton>Normal</TomatoButton>
    </div>
    )
  };
}

export default Clicker;
