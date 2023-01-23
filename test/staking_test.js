const { ethers, network } = require("hardhat");
const { expect } = require("chai");

const SECOND_IN_A_DAY = 24 * 60 * 60; // 86400

async function moveBlocks(amount) {
  console.log("Moving Blocks in Hardhat network");
  for (let i = 0; i < amount; i++) {
    // Automine blocks on hardhat network the number of time passed
    await network.provider.send("evm_mine", []); // increase block
    console.log(`Moved ${amount} Blocks.`);
  }
}

async function moveTime(amount) {
  console.log("Moving forward in time to generate rewards");
  // Sending requiest to Hardhat network
  await network.provider.send("evm_increaseTime", [amount]); // Increase time
  console.log(`Moving forward in time by ${amount} Seconds.`);
}

describe("Staking Tests", async function () {
  let staking;
  let rewardToken;
  let deployer;
  let stakeAmount;

  beforeEach(async function () {
    const account = await ethers.getSigners();
    deployer = account[0];

    // Deploy RewardToken SC
    const _rewardToken = await ethers.getContractFactory("RewardToken");
    rewardToken = await _rewardToken.deploy();
    // Deploy Staking SC
    const _staking = await ethers.getContractFactory("Staking");
    staking = await _staking.deploy(rewardToken.address, rewardToken.address);

    stakeAmount = ethers.utils.parseEther("10000");
  });

  it("Should be able to stake tokens", async function () {
    await rewardToken.approve(staking.address, stakeAmount);
    await staking.stake(stakeAmount);

    const deployerAddress = await deployer.getAddress(); //Also deployer.address
    const startingEarned = await staking.earned(deployerAddress);

    console.log(`Starting tokens earned in Staking DApp: ${startingEarned}`);
    await moveTime(SECOND_IN_A_DAY);
    // 1 Block in 12 Secs For Eth, and for 86400 Secs we wil have 86400/12 Blocks
    await moveBlocks(1);
    const endingEarned = await staking.earned(deployerAddress);
    console.log(
      `Total reward tokens earned after 24 hours lapsed:${endingEarned}`
    );

    // The moment we do starting
    expect(startingEarned).to.be.equal(0);
    expect(endingEarned).to.be.equal(SECOND_IN_A_DAY * 100); // 8640000
  });
});
