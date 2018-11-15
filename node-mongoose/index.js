const mongoose = require('mongoose');
const Dishes = require('./models/dishes');
const url = 'mongodb://localhost:3000:27017/conFusion';
const connect = mongoose.connect(url);
connect.then((db)=>{
    console.log('Connected');
    var newDish = Dishes({
        name: 'Pizza',
        description: 'a pizza'
    });
    newDish.save().then((dish)=>{
        console.log(dish);
        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log(dishes);
        return Dishes.remove({})
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err)
    });
})