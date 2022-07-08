let axios = require('axios');
axios.get("http://localhost:8080/movies/1").then(code=>{console.log(code.data);} )