const { ethers, upgrades } = require("hardhat");

const PROXY = "0x9bBADFcDF4589C6a6179Ee48b7fa7eeeCf4d801c";

async function main() {
  const PizzaV2 = await ethers.getContractFactory("PizzaV2");
  console.log("Upgrading Pizza...");
  await upgrades.upgradeProxy(PROXY, PizzaV2);
  console.log("Pizza upgraded successfully");
}

main();
