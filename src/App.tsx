import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/button.component';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props{

}
interface State{
  showModal:boolean;
}

export default class App extends React.Component<Props, State>{
  constructor(props:Props){
    super(props)
    this.state = {
      showModal: false

    }
  }

  handlerOpenClose(){
    this.setState({showModal:!this.state.showModal})
  }

  render(){
    const {showModal} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ButtonComponent showModal={showModal} handlerOpenModal={() => this.handlerOpenClose()}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

    }
  }
