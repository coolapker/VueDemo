let axios = require('axios');
url = "http://localhost:8080/movies/"
axios.get(url)
.then(res => {
    console.log(typeof res)
})
.catch(err => {
    console.error(err.status); 
})