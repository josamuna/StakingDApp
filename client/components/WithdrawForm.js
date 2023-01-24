import React from "react";
import { useWeb3Contract } from "react-moralis";
import StakingAbi from "../constants/Staking.json";
import { Form } from "web3uikit";
import { ethers } from "ethers";

function WithdrawForm() {
  const stakingAddress = "0x4F963F063531C4d51e0fb38e2F4575c0011B339c";

  const { runContractFunction } = useWeb3Contract();

  const withdrawOptions = {
    abi: StakingAbi.abi,
    contractAddress: stakingAddress,
    functionName: "withdraw",
  };

  async function handleWithdrawStakedToken(data) {
    try {
      const amountToWithdraw = data.data[0].inputResult;
      withdrawOptions.params = {
        amount: ethers.utils.parseEther(amountToWithdraw, "ether"),
      };

      const tx = await runContractFunction({
        params: withdrawOptions,
        onError: (error) => console.log(error),
        onSuccess: () =>
          handleWithdrawStakedToken(withdrawOptions.params.amount),
      });

      await tx.wait();
      console.log("Withdraw transaction complete");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form
        onSubmit={handleWithdrawStakedToken}
        data={[
          {
            inputWidth: "50%",
            name: "Amount to Withdraw",
            type: "number",
            value: "",
            key: "amoutToWithdraw",
          },
        ]}
        title="Withdraw staked tokens!"
      ></Form>
    </div>
  );
}

export default WithdrawForm;
