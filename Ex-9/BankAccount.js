var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.name = accountHolder;
    }
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Withdrawn ".concat(amount, " from ").concat(this.name, "'s Account"));
            return true;
        }
        else {
            console.log("Insufficient Balance in ".concat(this.name, "'s Account"));
            return false;
        }
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Credited ".concat(amount, " to ").concat(this.name, "'s Account"));
    };
    BankAccount.prototype.checkBalance = function () {
        console.log("".concat(this.name, "'s Account Balance : ").concat(this.balance));
    };
    return BankAccount;
}());
var Igloo = new BankAccount("Igloo", 10000);
var Bubbles = new BankAccount("Bubbles", 5000);
function showMenu() {
    console.log("1. Withdraw");
    console.log("2. Deposit");
    console.log("3. Check Balance");
    console.log("4. Exit");
}
function handleInput(acc) {
    var readlineSync = require("readline-sync");
    var choice = readlineSync.questionInt("Enter your choice: ");
    switch (choice) {
        case 1:
            var withdrawAmount = readlineSync.questionInt("Enter amount to Credit: ");
            acc.withdraw(withdrawAmount);
            acc.checkBalance();
            break;
        case 2:
            var creditAmount = readlineSync.questionInt("Enter amount to Deposit: ");
            acc.deposit(creditAmount);
            acc.checkBalance();
            break;
        case 3:
            acc.checkBalance();
            break;
        case 4:
            console.log("Thank You...");
            return;
        default:
            console.log("Invalid choice!");
    }
    console.log();
    handleInput(acc);
}
console.log("Welcome to the Bank!");
showMenu();
handleInput(Igloo);
