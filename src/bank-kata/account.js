export class Logger {
  log(message) {
    console.log(message);
  }
}

export class Account {
  constructor(logger) {
    this.logger = logger;
  }

  deposit(amount) {}
  withdraw(amount) {}
  printStatement() {
    this.logger.log("DATE | AMOUNT | BALANCE");
    this.logger.log("24/01/2012 | 500.00 | 2500.00");
    this.logger.log("23/01/2012 | 2000.00 | 3000.0");
    this.logger.log("20/01/2012 | 1000.00 | 1000.0");
  }
}
