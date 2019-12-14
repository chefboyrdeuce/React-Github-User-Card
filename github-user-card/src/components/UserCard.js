import React from 'react';
import axios from "axios";

class UserCard extends React.Component {
  constructor() {
    super();

    this.state = {
      userCard: []
    }

    console.log(this.state)
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/chefboyrdeuce/followers') 
      .then(response => {
        this.setState({
          userCard: response.data
      })
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)``
      })
  }

    render(){
        return(
          this.state.userCard.map( (follower)=>{
            
            return  (        
            <div className="card">
              <img src= {follower.avatar_url}></img>
              <div className="card-info">
                <h3 className="username">{follower.login}</h3>
                <p className="username"> {follower.username}</p>
              </div>
            </div>
          )})
        )
    }
}

export default UserCard;

