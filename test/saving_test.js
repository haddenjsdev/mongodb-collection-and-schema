
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe Tests
describe('Saving Record', function(){

  //Create tests
  it('Saves a Reccord to the Database', function(done){

    var char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });

  });

});
