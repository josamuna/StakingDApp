require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // Goerli testnet
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API}`,
      accounts: [process.env.MAIN_ACCOUNT],
      chainId: 5,
    },
    // Mumbai testnet
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API}`,
      accounts: [process.env.MAIN_ACCOUNT],
      chainId: 80001,
    },
    // Polygon mainnet
    polygon: {
      url: `polygon-mainnet.infura.io/v3/${process.env.INFURA_API}`,
      accounts: [process.env.MAIN_ACCOUNT_VALUE],
      chainId: 137,
    },
    // Ethereum mainnet
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API}`,
      accounts: [process.env.MAIN_ACCOUNT_VALUE],
      chainId: 1,
    },
    // etherscan: {
    //   apiKey: {
    //     goerli: process.env.ETHERSCAN_API_KEY,
    //   },
    // },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP,
    token: "matic",
    outputFile: "gasReports.txt",
    noColors: true,
  },
};
