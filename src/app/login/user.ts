export class User {
  _id: string;
  userID: string;

  constructor(_id: string, userID: string) {
    this._id = _id;
    this.userID = userID;
  }

  static toUser(result) {
    return new User(result._id, result.userID);
  }
}
