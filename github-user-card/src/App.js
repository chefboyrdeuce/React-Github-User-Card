import React from 'react';
import './App.css'; 
import MainCard from './components/MainCard';
import UserCards from './components/UserCard';
import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';
import axios from 'axios';




class App extends React.Component{
  constructor() {
    super();

    this.state = {

    }
  //need a componentDidMount for axios calls
  }

  componentDidMount(){
    
    axios.get('https://api.github.com/users/chefboyrdeuce/followers') //function called get accepts url argument
      .then(response => {
        console.log(response);

          response.data.forEach((follower) => {  //<--"for every item in this array..."
          
          const followerUserCard = new githubCard(follower); //<--- "...do this..."
          mainCard.appendChild(followerUserCard) // <- "...and this"
        });
      })

      .catch(error => {
        console.error(error)
      })

    axios.get('https://api.github.com/users/chefboyrdeuce')
      .then(response => {
        // const newUserCard = new githubCard(data);
        mainCard.appendChild(githubCard(response.data));
        console.log(response);
      })
      
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (

    <div class="container">
      <div class="header">
        <img src={lambdalogo} alt=" Lambda Logo"/>
        <p>❤️'s</p>
        <img src={githublogo} alt="GitHub Logo"/>
      </div>
      <div class="cards">

      </div>
    </div>

  );}
}

export default App;
