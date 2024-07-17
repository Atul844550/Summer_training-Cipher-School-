

const express = require('express');

const routes =express. Router();

// POST Request route

routes.post('/avengers', (req, res)=>{

console.log(req.body);

res.send({msg: 'Check your backend console'});
});

module.exports = routes;
