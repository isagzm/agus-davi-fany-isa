import { describe, it, expect } from "vitest";
import { Account } from "./account.js";
import { Logger } from "./account.js";

class LoggerFake extends Logger {
  constructor() {
    super();
    this.message = [];
  }
  log(message) {
    this.message.push(message);
  }
}

describe("Account", () => {
  it("works with the example", () => {
    const logger = new LoggerFake();
    const account = new Account(logger);

    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(400);

    account.printStatement();

    expect(logger.message).toEqual([
      "DATE | AMOUNT | BALANCE",
      "24/01/2012 | 400.00 | 2600.00",
      "23/01/2012 | 2000.00 | 3000.0",
      "20/01/2012 | 1000.00 | 1000.0",
    ]);
  });
});
