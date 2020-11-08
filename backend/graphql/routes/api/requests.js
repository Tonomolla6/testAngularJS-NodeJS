//importamos fetch
const fetch = require("node-fetch");
// const { Headers } = require('node-fetch');

exports.getUser = (username) => {
    console.log('funciona');
    return fetch(`http://localhost:3000/api/profiles/${username}`)
    .then(response => response.json())
    .then(data => {
        return data;
    });
}

// exports.get_user_token = async (token) =>{
//     return fetch('http://localhost:3000/api/user_full', { 
//         method: 'GET', 
//         headers: new Headers({
//           'Authorization': 'Token '+token, 
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }),
//       }).then(response => response.json())
//       .then(data => {
//           return data;
//       });

// }