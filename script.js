// Base Animal class
class Animal {
  // Constructor to store the species
  constructor(species) {
    this.species = species;
  }

  // Getter to retrieve the species
  getSpecies() {
    return this.species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Dog class extending Animal
class Dog extends Animal {
  constructor(species) {
    super(species); // Call the parent class constructor with species
  }

  // Method for barking
  bark() {
    console.log('woof');
  }
}

// Cat class extending Animal
class Cat extends Animal {
  constructor(species) {
    super(species); // Call the parent class constructor with species
  }

  // Method for purring
  purr() {
    console.log('purr');
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
