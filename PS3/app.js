const express = require("express");
const path = require('path');

// init app
const app = express();

app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

// set view engine
app.set('views', path.join(__dirname, 'views'));    // ***IMPORTANT*** PUG templates have to be in the views folder
app.set('view engine', 'pug');

// home route
app.get('/', (req, res) => {
    res.render('index', {
        title: "Welcome!",
        str: ""
    });
});

// set up router
const userRouter = require('./ps3');
app.use('/ps3', userRouter)

// start server
app.listen(3000);
