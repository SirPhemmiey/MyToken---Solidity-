const MyToken = artifacts.require('MyToken')

contract('MyToken', accounts => {
  it('has a total supply and a creator', async function () {
    const owner = accounts[0]
    const myToken = await MyToken.new({ from: owner })
    const creator = await myToken.creator()
    const totalSupply = await myToken.totalSupply()
    assert(creator === owner)
    assert(totalSupply.eq(10000))
    
  it('allows token transfers', async function () {
    const owner = accounts[0]
    const recipient = accounts[1]
    const myToken = await MyToken.new({ from: owner })
    await myToken.sendTokens(recipient, 10, { from: owner })
    const ownerBalance = await myToken.balanceOf(owner)
    assert(ownerBalance.eq(9990))
    const recipientBalance = await myToken.balanceOf(recipient)
    assert(recipientBalance.eq(10))
})