var BimsToken = artifacts.require("./BimsToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BimsToken);
};
