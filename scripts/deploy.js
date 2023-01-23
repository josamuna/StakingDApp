// Deployment script
const { ethers } = require("hardhat");

async function main() {
  // Deploy RewardToken SC
  const RewardToken = await ethers.getContractFactory("RewardToken"); // Getting abi
  // deploy contract
  const rewardToken = await RewardToken.deploy();
  // Waiting contract to be fully deployed
  await rewardToken.deployed();

  console.log(`RewardToken contract deployed to: ${rewardToken.address}`);

  //Deploy Staking SC
  const Staking = await ethers.getContractFactory("Staking"); // Getting abi
  const staking = await Staking.deploy(
    rewardToken.address,
    rewardToken.address
  );
  await staking.deployed();

  console.log(`Staking contract deployed to: ${staking.address}`);
}

main().catch((error) => {
  console.log(`Smart Contract deployment failed, ${error}`);
  process.exitCode = 1;
});
