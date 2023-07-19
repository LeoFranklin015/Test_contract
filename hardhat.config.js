require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();
const ETHERSCAN_API = process.env.ETHERSCAN_API;
module.exports = {
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    },
  },
  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://eth-sepolia.g.alchemy.com/v2/HxuKYD1liqdObCWEw6gQqP2J4yAr_SD2",
      // url: "https://sepolia.infura.io/v3/HxuKYD1liqdObCWEw6gQqP2J4yAr_SD2", // Replace with the actual RPC URL
      accounts: [
        "6483548cb0004e5d295944edefe99c586570cbe77a6e76fc49fea11e7cf5d151",
      ], // Add the private keys of the accounts you want to use on the "semolia" network
      blockConfirmation: 6,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API, // Replace with the API key you obtained from Etherscan.
    },
  },
};
