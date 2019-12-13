import React from 'react';
import axios from "axios";

class UserCard extends React.Component {
    render(){
        return{
       

        }
        
    }
}

export default UserCard;


axios

.get('https://api.github.com/users/chefboyrdeuce/followers') //function called get accepts url argument
.then(response => {
  console.log(response);
})
.catch(error => {
  console.error(error)
})