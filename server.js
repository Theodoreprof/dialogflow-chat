const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())
app.get('/', (req, res) =>{
    res.send("Hi from server");
});

require('./routes/df-routes')(app);

app.listen(port, () => {
    console.log("server is running");
});