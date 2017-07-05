console.log('starting password manager');

var storage = require('node-persist');

storage.initSync();

// storage.setItemSync('accounts', [{
//   username: 'tony',
//   balance: 0
// }]);

var accounts = storage.getItemSync('accounts');

// accounts.push({
//   username: 'jen',
//   balance: 75
// });

// storage.setItemSync('accounts', accounts);


console.log(accounts);

