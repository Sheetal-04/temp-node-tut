//---------Modules----------//
//CommonJS , every file is module(By default)
//Modules = Encapsulated Code (Only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
sayHi('Susan');
sayHi(data.singlePerson.name);
sayHi(names.john);
sayHi(names.peter);