# Truffle Suite

Learning [truffle](https://trufflesuite.com/) and web3.

## Install Truffle

1. Install [node.js](https://nodejs.org/en/download/) and npm (node package manager) (comes included with node.js)

2. Install truffle (-g flag for global)

```
npm install -g truffle
```

## Start your Truffle Project

Start a truffle project.

```
truffle init
```

Folder structure:

1. **contracts** - folder for solidity smart contracts
2. **migration** - explains on how truffle deploys the smart contracts to blockchain (written in node.js)
3. **test** - test files (typically two types of test files: solidity or node.js)
4. **truffle-config.js** - define deployment network for deploying the smart contract (i.e., version of solidity or network to deploy)

_Note: creating smart contracts should include a SPDX-License-Identifier at the beginning, see more details [here](https://docs.soliditylang.org/en/v0.6.8/layout-of-source-files.html)._

## Compile your Contracts

```
# Ran from the root directory/folder
# and compiles into the build folder
truffle compile
```

## Test Deploy on a Local Blockchain

1. Set up any migration files for your smart contracts then start the development blockchain:

```
truffle develop
```

2. Compile your contracts on the development blockchain

```
migrate --reset
```

## Test Deploy on a Testnet Blockchain

1. Set up the truffle-config.js

```
// Uncomment these lines
const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

// Add testnet blockchain info under networks:,
// I'm using BSC testnet in this example:
    bscTestnet: {
      networkCheckTimeout: 50000, // required to extend timeout period during network check
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s2.binance.org:8545/'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 2000,
      skipDryRun: true
    }

```

2. Create .secret file containing mnemonic.

```
touch .secret
vim .secret
// input your mnemonic as plaintext
// i.e.,
// "this is your secret mnemonic remember not to share the secret phrase"
```

## Interact with the Contract using Truffle Console

1. Start the truffle console

```
truffle console --network bscTestnet
```

2. Interact with the SimpleStorage smart contract, in the truffle console run:

```
// Points to the SimpleStorage deployed contract
storage = await SimpleStorage.deployed()

// Check the storage contract address
storage.address

// Write some data to the contract
await storage.updateData(10)

// To check your transaction, copy the tx hash
// and search it on the testnet explorer.

// Next, we can read from the contract with the latest
// data input. Store the data read from chain and
// convert to string; this should return '10'.
data = await storage.readData()
data.toString()
```

## Ending notes

1. `truffle develop` is for local development
2. `truffle console --network <network_name>` is for an actual blockchain network
