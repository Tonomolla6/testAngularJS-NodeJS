//importamos fetch
const fetch = require("node-fetch");
const { Headers } = require('node-fetch');

exports.getUser = (username) => {
    console.log('funciona');
    return fetch(`http://localhost:3000/api/profiles/${username}`)
    .then(response => response.json())
    .then(data => {
        return data;
    });
}

exports.getToken = async (token) =>{
    console.log("punto 1");
    return fetch('http://localhost:3000/api/user/token', { 
        method: 'GET', 
        headers: new Headers({
          'Authorization': 'Token ' + token, 
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
      }).then(response => response.json())
      .then(data => {
          return data;
      });
}