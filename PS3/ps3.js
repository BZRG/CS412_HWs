const express = require('express');
const router = express.Router();

// Part B
router.get('/partB', (req, res) => {
    res.render('index', {
        title: "The String You Request is: ",
        str: "Part B!"
    });
});


// Part C
router.post('/partC', (req, res) => {
    res.send(req.body);
});

router.get('/partC', (req, res) => {
    res.render('partC', {
        title: `The String You Request is:`,
        str: `${req.body.String}`,
        len: `${req.body.Length}`
    });
});


// Part D
router.get('/names/:name', (req, res) => {
    res.render('index', {
        title: `The String You Request is:`,
        str: `${req.params.name}`
    });
});

module.exports = router