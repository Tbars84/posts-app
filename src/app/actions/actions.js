import React from 'react'
import axios from 'axios'
// EVENTO DE BUSCADOR, EL FILTRO SE REALIZA POR NOMBRE DE USUARIO DE GITHUB
function searchAc(name) {
  axios.get(`https://api.github.com/users/${name}/repos?page=1&per_page=30`)
   .then((response) => {
     this.setState({
        userOwner: response.data[0].owner,
        postList: response.data
      })
   })
  .catch((error)=>{
     console.log(error);
  });
}
export default searchAc