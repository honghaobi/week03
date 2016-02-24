var assert = require('assert');

var Animal = require('../javascript/animal.js');

describe('Animal', function(){

  describe('properties', function(){

    var animal = new Animal('lion', 'roar', 'Simba', 3);
    
    describe('kind', function(){
      it('should have a kind', function(){
        assert.equal(animal.kind, 'lion');
      });
    });

    describe('sound', function(){
      it('should have a sound', function(){
        assert.equal(animal.sound, 'roar');
      });
    });

    describe('name', function(){
      it('should have a name', function(){
        assert.equal(animal.name, 'Simba');
      });
    });

    describe('age', function(){
      it('should have an age', function(){
        assert.equal(animal.age, 3);
      });
    });

    describe('awake', function(){
      it('should have a default value for awake', function(){
        assert.equal(animal.awake, false);
      });   
    });

  }); // properties

  describe('methods', function(){

    beforeEach(function() {
      lion = new Animal('lion', 'roar', 'Simba', 3);
      pig  = new Animal('pig', 'oink', 'Porky', 2);
    });

    afterEach(function() {
      lion = null;
      pig  = null;
    });

    describe('#wakeUp()', function(){
      it('should change state to awake', function(){
        lion.wakeUp();
        pig.wakeUp();

        assert.equal(lion.awake, true);
        assert.equal(pig.awake, true);
      });
    });

    describe('#speak()', function(){
      it('should roar if a lion', function(){
        assert.equal(lion.speak(), 'roar');
      });
      
      it('should oink if a pig', function(){
        assert.equal(pig.speak(), 'oink');
      });
    });
    
    describe('#feed()', function(){
      it('should return "NOM NOM NOM" if awake', function(){
        pig.wakeUp();
        var lionFed = lion.feed();
        var pigFed = pig.feed();
        
        assert.equal(lionFed, undefined);
        assert.equal(pigFed, 'NOM NOM NOM');
      });
    });

    describe('#growUp()', function(){
      xit('should increment age by one', function(){
        // write an assertion for what's
        // being described on line 87
      });
    });

    xdescribe('#sleep()', function(){
      // write the `it`block and assertion
      // that changes `awake` to `false`. 
    });

  }); // methods

});
