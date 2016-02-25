var Animal = require('./animal');

function Zoo(location, name, status, animals) {
  this.location = location;
  this.name = name;
  this.status = 'closed';
  this.animals = [];
 // write code here
}

Zoo.prototype.isOpen = function (){
  return this.status === 'closed' ? false: true;
};

Zoo.prototype.open = function (){
  return this.status = 'open';
};

Zoo.prototype.close = function (){
  return this.status = 'close';
};

Zoo.prototype.addAnimal = function (animal){
  if (this.status === "open" && this.animals.indexOf(animal) === -1 && Object.getPrototypeOf(animal) === Animal.prototype) {
    this.animals.push(animal);
  }
};

Zoo.prototype.removeAnimal = function (animal){
  if (this.status === "open" && this.animals.indexOf(animal) > -1) {
    this.animals.splice(this.animals.indexOf(animal),1);
  }
};

Zoo.prototype.changeLocation = function (newLoc){
  this.location = newLoc;
};



module.exports = Zoo;
