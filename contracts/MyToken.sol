pragma solidity ^0.4.17;

contract MyToken {
    address public creator;
    uint public totalSupply;
    mapping (address => uint) public balances;
    
  function MyToken() public {
    creator = msg.sender;
    totalSupply = 1000;
    balances[creator] = totalSupply;
  }
  
  function balanceOf(address owner) public constant returns (uint) {
    return balances[owner];
  }
  
  function sendTokens(address receiver, uint amount) public returns(bool) {
    address owner = msg.sender;
    
    require(amount > 0);
    require(balances[owner] >= amount);
    
    balances[owner] -= amount;
    balances[receiver] += amount;
    return true;
    }
    
    /* DO ON TRUFFLE DEVELOP:
owner = web3.eth.accounts[0]
instance = MyToken.at('[DEPLOYED_ADDRESS]')
 instance.balanceOf(owner)
    TO SEND TOKENS

amount = 10
recipient = web3.eth.accounts[1]
instance.sendTokens(recipient, amount, { from: owner })

instance.balanceOf(owner)
instance.balanceOf(recipient)
*/

   
}
    