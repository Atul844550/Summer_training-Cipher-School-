describe('Updating records', () =>{

newUser = new User({

name: 'Jon Snow',

age: 16

})

newUser.save().then((data) {

console.log(data);

done();

}}

})

it('it updates on record in the db', (done)=>{

User.findOneAndUpdate({ name: 'Jon Snow'}, {name: 'Arya', age: 24), {useFindAndM

console.log(data);

User.findById({ id: newUser._id)).then( (result) => {

console.log(result);

assert(result.nam === 'Arya')

done();
})
})
})
})
