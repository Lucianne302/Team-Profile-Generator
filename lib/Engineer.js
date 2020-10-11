const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, githubUserName, githubURL) {
    super(name, id, email);
      this.githubUserName = githubUserName;
      this.githubURL = githubURL;
  }

  getRole() {
    return "Engineer";
  }

  getgithubUserName() {
    return this.getgithubUserName;
  }

  getgithubURL() {
    return this.getgithubURL;
  }
}
  module.exports = Engineer;