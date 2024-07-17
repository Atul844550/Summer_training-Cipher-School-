

const express = require('express'); const mongoose = require('mongoose');

const db_url = 'mongodb-srv://new-user-123:new-user-123@testcluster.vyftd.mongodb.net/ba

mongoose.connect(db_url, {useNewUrlParser: true), ()>( console.log('***Connection established to DB*****');

})

const app express();

app.listen(3001, () => {

}) console.log("Listening at port number 3001');
})
