// import axios from 'axios';
const axios = require('axios').default;
axios.get("http://localhost:8080/movies/1").then((data)=>{
    // console.log(data);
    console.log(data);
})