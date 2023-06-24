const { network } = require("hardhat");
const { networkConfig } = require("../help-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts;
  const chainId = network.config.chainId;

  const address = networkConfig[chainId]["ethUSDPriceFeed"];
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [address],
    log: true,
  });
};
