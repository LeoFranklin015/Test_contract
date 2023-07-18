const networkConfig = {
  11155111: {
    name: "sepolia",
    ethUSDPriceFeed: "0x694aa1769357215de4fac081bf1f309adc325306",
  },
};
const developement = ["hardhat", "localhost"];
const DECIMAL = 8;
const INTIAL_ANSWER = 20000000;
module.exports = { networkConfig, developement, DECIMAL, INTIAL_ANSWER };
