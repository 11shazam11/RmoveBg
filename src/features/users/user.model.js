class Users {
  constructor(name, password) {
    (this.name = name), (this.password = password);
  }
  static getUsers() {
    return users;
  }

  static register(name, password) {
    let newUser = new Users(name, password);
    users.push(newUser);
  }

  static login(name, password) {
    let found = users.find((u) => u.name == name && u.password == password);
    if (found) {
      return true;
    } else {
      return false;
    }
  }
}
var users = [new Users("abhay", "pass1")];
export default Users;
