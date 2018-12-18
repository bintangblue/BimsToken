pragma solidity ^0.4.2;

contract BimsToken {

    string public name = 'Bims Token';
    string public symbol = 'BIMS';
    string public standard = 'BIMS v0.1';

    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    function BimsToken(uint256 _totalSupply) public{
        balanceOf[msg.sender] = _totalSupply;
        totalSupply = _totalSupply;
    }
}