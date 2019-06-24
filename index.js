const createDog = require('./create-dog');
const dogInfo = require('./dogInfo');

const args = process.argv;

const dog = createDog(args[2], args[3], args[4]);
console.log(dog);

const otherDog = createDog(dogInfo.name, dogInfo.age, dogInfo.weight);
console.log(otherDog);
