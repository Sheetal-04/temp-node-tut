// module.exports.items = ['item1','item2'];
const items = ['item1','item2'];
const person = {
    name: 'Bob',
}
const value1 = 50;
module.exports.value1 = value1;
const function1 = function() {
    console.log("I am a function")
  }
// module.exports = person;
// module.exports.singlePerson = person;
// module.exports = {items , person};
// module.exports = items;
module.exports = {...module.exports,function1 };
console.log(module);