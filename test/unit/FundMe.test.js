const { assert } = require("chai");
const { deployments, ethers, getNamedAccounts } = require("hardhat");
describe("FundMe", async () => {
  let fundMe;
  let deployer;
  let mockV3Aggregator;
  beforeEach(async () => {
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    fundMe = ethers.getContractAt("FundMe", deployer);
    mockV3Aggregator = ethers.getContractAt("MockV3Aggregator", deployer);
  });
  describe("Constructor", async () => {
    it("Sets the aggregator address correctly ", async () => {
      const response = await fundMe.priceFeed;
      assert.equal(response, mockV3Aggregator.address);
    });
  });
});
