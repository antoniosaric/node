console.log('starting password manager');

var storage = require('node-persist');

storage.initSync();

// storage.setItemSync('name', 'Tony');

var name = storage.getItemSync('name');
console.log('Save name is: ' + name);

some random change