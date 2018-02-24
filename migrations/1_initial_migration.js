var Migrations = artifacts.require("./Migrations.sol");
var MyToken = artifacts.require('./MyToken.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations).then(function() {
      return deployer.deploy(MyToken).then(function() {
      })
  })
};
