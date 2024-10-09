pragma solidity ^0.8.0;

//forge create --rpc-url https://rpc.ankr.com/polygon_amoy --private-key b9c31c3a752377c772983feee784870e5eead1cefb506dfbec8276275abb3363 MyFirstToken.sol:Kryptonita --constructor-args 10000000
contract MyToken {
    string public name = "Kryptonita";
    string public symbol = "KPT";

    mapping(address => uint256) public balanceOf;
    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 initialSupply) {
        balanceOf[msg.sender] = initialSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}
