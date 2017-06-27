var account = {
  balance: 0
}

var add = function(account, amount){
  account.balance += amount
}

var withdrawl = function(account, amount){
  account.balance -= amount
}

var getBalance = function(account){
  return (account.balance)
}

add(account,1000)
withdrawl(account, 1)

console.log(getBalance(account))