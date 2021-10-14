/*
    Name:       Wyatt Kirschner
    Student ID: 200407722
    Course:     COMP3033
    Project:    Lab 2
    Date: 10/13/2021

*/


// Required to create a const express to embed express
const express = require('express');

// port is to set the listening port to 3000
const port = 3000;

//Web application needs to structure a request and response
app.get('/', (req, res) => res.send('Wyatt Kirschner - 200407722'));

// If connection to local server is successful, it will be stated in the console / terminal
app.listen(port, () => console.log('Lab 2 has connected succesfully. Access can be found on Port 3000'));