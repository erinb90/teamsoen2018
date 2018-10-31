export class Account {
  _id: string;
  userID: string;
  balance: number;

  constructor(_id: string, userID: string, balance: number) {
    this._id = _id;
    this.userID = userID;
    this.balance = balance;
  }

  static toAccount(result) {
    return new Account(result._id, result.userID, Number(result.balance));
  }
}

