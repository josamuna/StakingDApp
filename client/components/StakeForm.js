import React from "react";
import { useWeb3Contract } from "react-moralis";
// Import ABI for Staking contract
import StakingAbi from "../constants/Staking.json";
// Import ABI for RewardToken
import TokenAbi from "../constants/RewardToken.json";
import { Form } from "web3uikit";
import { ethers } from "ethers";

function StakeForm() {
  const stakingAddress = "0x4F963F063531C4d51e0fb38e2F4575c0011B339c";
  const tokenAddress = "0x9239845af6992fd76229DE8eAA6047b8037B49EE";

  const { runContractFunction } = useWeb3Contract();

  let approveOptions = {
    abi: TokenAbi.abi,
    contractAddress: tokenAddress,
    functionName: "approve",
  };

  let stakeOptions = {
    abi: StakingAbi.abi,
    contractAddress: stakingAddress,
    functionName: "stake",
  };

  async function handleStakeSubmit(data) {
    const amountToApprove = data.data[0].inputResult;
    approveOptions.params = {
      amount: ethers.utils.parseEther(amountToApprove, "ether"),
      spender: stakingAddress,
    };

    const tx = await runContractFunction({
      params: approveOptions,
      onError: (error) => console.log(error),
      onSuccess: () => {
        handleApproveSuccess(approveOptions.params.amount);
      },
    });
  }

  async function handleApproveSuccess(amountToStakeFormatted) {
    try {
      stakeOptions.params = {
        amount: amountToStakeFormatted,
      };

      const tx = await runContractFunction({
        params: stakeOptions,
        onError: (error) => console.log(error),
      });

      await tx.wait();
      console.log("Stake transaction complete");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form
        onSubmit={handleStakeSubmit}
        data={[
          {
            inputWidth: "60%",
            name: "Amount to stake",
            type: "number",
            value: "",
            key: "amountToStake",
          },
        ]}
        title="Stake Now!"
      ></Form>
    </div>
  );
}

export default StakeForm;
