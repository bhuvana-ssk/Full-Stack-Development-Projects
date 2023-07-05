class BankAccount {
    private balance: number;
    private name:string;
    constructor(private accountHolder: string, initialBalance: number) {
      this.balance = initialBalance;
      this.name = accountHolder;
    }

    withdraw(amount: number): boolean {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.name}'s Account`);
        return true;
      } else {
        console.log(`Insufficient Balance in ${this.name}'s Account`);
        return false;
      }
    }
  
    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Credited ${amount} to ${this.name}'s Account`);
    }
  
    checkBalance(): void {
      console.log(`${this.name}'s Account Balance : ${this.balance}`);
    }
  }
  
const Igloo = new BankAccount("Igloo", 10000);
const Bubbles = new BankAccount("Bubbles", 5000);

function showMenu(): void {
    console.log("1. Withdraw");
    console.log("2. Deposit");
    console.log("3. Check Balance");
    console.log("4. Exit");
}
  
function handleInput(acc: BankAccount): void {
    const readlineSync = require("readline-sync");
    const choice = readlineSync.questionInt("Enter your choice: ");
  
    switch (choice) {
      case 1:
        const withdrawAmount = readlineSync.questionInt("Enter amount to WithDraw: ");
        acc.withdraw(withdrawAmount);
        acc.checkBalance();
        break;
      case 2:
        const creditAmount = readlineSync.questionInt("Enter amount to Deposit: ");
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