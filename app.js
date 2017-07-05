console.log('starting password manager');

var storage = require('node-persist');

storage.initSync();

function createAccount (account){
  var accounts = storage.getItemSync('args');

  if (typeof accounts === 'undefined'){
    var accounts = [];
  }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);

    return account;
}

function getAccount(accountName){
  var accounts = storage.getItemSync('accounts');
  var matchedAccount;

  accounts.forEach(function(account){
    if (account.name === accountName){
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

// createAccount({
//   name: 'facebook',
//   username: 'tony@something.com',
//   password: 'password123!'
// })

var facebookAccount = getAccount('facebook');
console.log(facebookAccount);
