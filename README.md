# UUPS Proxy Pattern

## Setup:

- Clone the repo

- Install the dependencies
  `npm install`

- Create a new file `.env` from `.env.example`

```sh
cp .env .env.example
```

- In `.env` file add `INFURA_API_KEY`, `PRIVATE_KEY` and `ETHERSCAN_API_KEY`

> Note: This project uses Hardhat

## Compiling:

- To compile the contracts

```sh
npm run compile
```

## Testing:

- To run the unit tests, use the command.

```sh
npm run tests
```

## Deployment and Upgrades:

- To deploy the v1 contract to kovan run :

```sh
npm run deploy_v1 kovan
```

- To upgrade to V2, run :

```sh
npm run upgrade_v2 kovan
```

> Note: More networks can be configured in the `hardhat.config.js` file.

## Verification:

To verify the contracts on Etherscan

```sh
npx hardhat verify --network kovan <DEPLOYED_CONTRACT_ADDRESS>
```
