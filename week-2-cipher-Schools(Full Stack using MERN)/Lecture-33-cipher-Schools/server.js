

const express = require('express require(id: string): any

const mongoose = require('mongoo

const routes = require('./routes')

const db_url = 'mongodb+srv://new-user-123:new-user-123@testcluster.vyftd.mongodb.net/ba

mongoose.connect(db_url, { useNewUrlParser: true, useUnified Topology: true }, () { console.log('**Connection established to DB*****'); })

const app express();

app.use('/', routes)

app.listen(3001, ()

console.log('Listening at port number 3001');
