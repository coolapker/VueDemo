let axios = require('axios');
// import axios from "axios";

let url;
url = "http://localhost:8080/movies/1"
axios.get(url)
.then(res => {
    console.log(res.data)
})
.catch(err => {
    console.error(err); 
})