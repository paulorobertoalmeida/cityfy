
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const infura = fs.readFileSync(".infura").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.01",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000
    }
  },
  ropsten: {
    provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infura}`),
    network_id: 3,       // Ropsten's id
    gas: 5500000,        // Ropsten has a lower block limit than mainnet
    confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
  },

  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
