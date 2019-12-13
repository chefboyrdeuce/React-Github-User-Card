import React from 'react';
import axios from "axios";


axios

.get('https://api.github.com/users/chefboyrdeuce')
.then(response => {
  console.log(response);
})
.catch(error => {
  console.error(error)
})


export default function MainCard() {
    return (
      <header className="cards">
       
      </header>
    );
  }
  