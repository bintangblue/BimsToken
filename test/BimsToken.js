var BimsToken = artifacts.require("./BimsToken.sol");

contract('BimsToken', function(accounts){

    it('set the total supply upon development', function(){
        return BimsToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000')
        })
    });
})