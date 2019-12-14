import React from 'react';
import './App.css'; 
import MainCard from './components/MainCard';
import UserCard from './components/UserCard';
import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';

class App extends React.Component{
  constructor() {
    super();

    console.log(this.state)
  }

  render() {
    return (

    <div className="container">
      <div className="header">
        <img src={lambdalogo} alt=" Lambda Logo"/>
        <p>❤️'s</p>
        <img src={githublogo} alt="GitHub Logo"/>
      </div>
      <div className="cards">
        <MainCard someData={42} />
        <UserCard />
      </div>
    </div>

  );}
}

export default App;
