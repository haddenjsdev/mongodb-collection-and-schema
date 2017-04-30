
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe Tests
describe('Finding Records', function(){

  var char;

  beforeEach(function(done){
    var char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  })

  //Create tests
  it('Finding one Record to the Database', function(done){

    MarioChar.findOne({ name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });

  });

  it('Finds one Record by ID from the Database', function(done){

    MarioChar.findOne({ _id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done();
    });

  });

});
