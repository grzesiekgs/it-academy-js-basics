function Animal (name, sound, numberOfLegs, hasFur) {
  this.name = name;
  this.sound = sound;

  if (numberOfLegs) {
    this.numberOfLegs = numberOfLegs;
  }

  if (hasFur !== undefined) {
    this.hasFur = hasFur;
  }

  return this;
}

Animal.prototype = {
  hasFur: true,
  numberOfLegs: 4
}

const dog = new Animal('dog', 'bark');
const weirdDog = new Animal('dog', 'baarark', 3, false);
