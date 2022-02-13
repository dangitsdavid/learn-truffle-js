# Truffle Suite

Learning [truffle](https://trufflesuite.com/) and web3

## Install Truffle

1. Install [node.js](https://nodejs.org/en/download/) and npm (node package manager) (comes included with node.js)

2. Install truffle (-g flag for global)

```
npm install -g truffle
```

## Start your Truffle Project

Start a truffle project

```
truffle init
```

Folder structure:

1. **contracts** - folder for solidity smart contracts
2. **migration** - explains on how truffle deploys the smart contracts to blockchain (written in node.js)
3. **test** - test files (typically two types of test files: solidity or node.js)
4. **truffle-config.js** - define deployment network for deploying the smart contract (i.e., version of solidity or network to deploy)

**note: creating smart contracts should include a SPDX-License-Identifier at the beginning, see more details [here](https://docs.soliditylang.org/en/v0.6.8/layout-of-source-files.html)**

## Compile your Contracts

```
# Ran from the root directory/folder
# and compiles into the build folder
truffle compile
```
