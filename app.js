console.log('starting password manager');

var storage = require('node-persist');

storage.initSync();


var argv = require('yargs')
           .command('create', 'create a new account', function(yargs){
              yargs.options({
                name: {
                  demand: true,
                  alias: 'n',
                  desciption: "account name (eg. twitter, facebook)",
                  type: "string"
                },
                username: {
                  demand: true,
                  alias: 'u',
                  desciption: "account username or email",
                  type: "string"
                },
                password: {
                  demand: true,
                  alias: 'p',
                  desciption: "account password",
                  type: "string"
                }
              }).help('help')
            })

            .command('get', 'get an existing account', function(yargs){
              yargs.options({
                name: {
                  demand: true,
                  alias: 'n',
                  desciption: "account name (eg. twitter, facebook)",
                  type: "string"
                }
              }).help('help')
            })
            .help('help')
            .argv;

var command = argv._[0];

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

if (command === 'create'){
  var createdAccount = createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
  console.log('account creted');
  console.log(createdAccount);
} else if (command === 'get'){
  var fetchAccount = getAccount(argv.name);

  if (typeof fetchAccount === 'undefined'){
    console.log('account not found');
  } else {
    console.log('account found');
    console.log(fetchAccount);
  }
}
