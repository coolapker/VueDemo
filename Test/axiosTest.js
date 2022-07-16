let axios = require('axios');
const { Result } = require('element-ui');
// import axios from "axios";

let url;
url = "http://8.142.4.147:8080/movies/1"
axios.get(url)
    .then(res => {
        console.log(res.data)
    })
    .then(null, err => {
        console.error(err);
    })

