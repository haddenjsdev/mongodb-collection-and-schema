const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;

//Connect to Database before tests run
before(function(done){
  //Connect to Mongoose
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...')
    done();
  }).on('error',function(error){
     console.log('Connection Error', error)
  });
});

// Drop the characters before each test
beforeEach(function(done){
  //Drop Connections
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });

});
