import React from 'react';
import axios from "axios";

class MainCard extends React.Component {
  constructor() {
    super();

    this.state = {
      mainCard: {}
    }
    console.log(this.state);
  }
  
  componentDidMount(){
    axios.get('https://api.github.com/users/chefboyrdeuce')
      .then(response => {
        this.setState({
          mainCard: response.data
        })
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }
  
  render(){
    return(
        <div className="card">
          <img src= {this.state.mainCard.avatar_url}></img>
          <div className="card-info">
            <h3 className="name">{this.state.mainCard.name}</h3>
            <p className="username"> {this.state.mainCard.login}</p>
            <p className="Followers"> {this.state.mainCard.followers} followers</p>
            <a href={this.state.mainCard.html_url}>LINK</a>
          </div>
        </div>
    ) 
  }
}

export default MainCard;

  