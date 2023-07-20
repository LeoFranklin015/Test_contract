const { assert, expect } = require("chai");
const { deployments, ethers, getNamedAccounts } = require("hardhat");
describe("FundMe", async () => {
  let fundMe;
  let deployer;
  let mockV3Aggregator;
  beforeEach(async () => {
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    fundMe = await ethers.getContractAt("FundMe", deployer);
    mockV3Aggregator = await ethers.getContractAt("MockV3Aggregator", deployer);
  });
  describe("Constructor", async () => {
    it("Sets the aggregator address correctly ", async () => {
      const response = await fundMe.priceFeed;
      assert.equal(response, mockV3Aggregator.address);
    });
  });
  describe("fund", function () {
    it("fails if you dont send enough eth", async function () {
      await expect(fundMe.fund()).to.be.revertedWith(
        "You need to spend more ETH!"
      );
    });
  });
});
