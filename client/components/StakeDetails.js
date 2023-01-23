import React, { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import StakingAbi from "../constants/Staking.json";
import TokenAbi from "../constants/RewardToken.json";

function StakeDetails() {
  const { account, isWeb3Enabled } = useMoralis();
  const [rtBalance, setRtBalance] = useState("0");
  const [stakedBalance, setStakedBalance] = useState("0");
  const [earnedBalance, setEarnedBalance] = useState("0");

  const stakingAddress = "0x4F963F063531C4d51e0fb38e2F4575c0011B339c";
  const rewardTokenAddress = "0x9239845af6992fd76229DE8eAA6047b8037B49EE";

  const { runContractFunction: getRTBalance } = useWeb3Contract({
    abi: TokenAbi.abi,
    contractAddress: rewardTokenAddress,
    functionName: "balanceOf",
    params: {
      account,
    },
  });

  const { runContractFunction: getStakedBalance } = useWeb3Contract({
    abi: StakingAbi.abi,
    contractAddress: stakingAddress,
    functionName: "getStaked",
    params: {
      account,
    },
  });

  const { runContractFunction: getEarnedBalance } = useWeb3Contract({
    abi: StakingAbi.abi,
    contractAddress: stakingAddress,
    functionName: "earned",
    params: {
      account,
    },
  });

  useEffect(() => {
    async function updateUiValues() {
      const rtBalance = (
        await getRTBalance({ onError: (error) => console.log(error) })
      ).toString();
      const formattedRtBalance = parseFloat(rtBalance) / 1e18;
      const formattedRtBalaceRounded = formattedRtBalance.toFixed(2);
      setRtBalance(formattedRtBalaceRounded);

      const stakedBalace = (
        await getStakedBalance({ onError: (error) => console.log(error) })
      ).toString();
      const formattedStakedBalance = parseFloat(stakedBalace) / 1e18;
      const formattedStakedBalanceRounded = formattedStakedBalance.toFixed(2);
      setStakedBalance(formattedStakedBalanceRounded);

      const earnedBalance = (
        await getEarnedBalance({ onError: (error) => console.log(error) })
      ).toString();
      const formattedEarnedBalance = parseFloat(earnedBalance) / 1e18;
      const formattedEarnedBalanceRounded = formattedEarnedBalance.toFixed(2);
      setEarnedBalance(formattedEarnedBalanceRounded);
    }

    if (isWeb3Enabled) updateUiValues();
  }, [
    account,
    getEarnedBalance,
    getRTBalance,
    getStakedBalance,
    isWeb3Enabled,
  ]);
  return (
    <div className="p-3">
      <div className="font-bold m-2">RT Balance is: {rtBalance}</div>
      <div className="font-bold m-2">Earned Balance is: {earnedBalance}</div>
      <div className="font-bold m-2">Staked Balance is: {stakedBalance}</div>
    </div>
  );
}

export default StakeDetails;
