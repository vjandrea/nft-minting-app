const SweetPuppies = artifacts.require("SweetPuppies");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SweetPuppies", function (accounts) {
  let sweetPuppies;

  before(async () => {
    sweetPuppies = await SweetPuppies.deployed();
  });

  console.log(accounts);

  it("contract is paused at construction", async function () {
    let status = await sweetPuppies.paused();
    return assert.isTrue(status);
  });

  it("isActive returns correct status", async function () {
    let status = await sweetPuppies.isActive();
    return assert.isFalse(status);
  });

  it("contract can be unpaused by owner", async function () {
    let status = await sweetPuppies.activate();
    return assert.isTrue(await sweetPuppies.isActive());
  });
});


