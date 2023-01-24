# Staking DeFi Project

A sample DeFi Staking project with Client ans Server side code.

## How to run the project

---

1. Open the project with your prefered IDE (Like VS Code).
2. Open a terminal, and go inside the root directory.
3. Install all dependencies by typing `npm install`.
4. create the `.env` file on the root directory of the project and populate these variables:
   - `COINMARKETCAP`: Coinmarketcap API to use for live gas price.
   - `INFURA_API`: Infura API Key to provide a Blockchain node.
   - `MAIN_ACCOUNT`: The private key of the main accout which will store your `RewardToken`.
5. Install Metamask extension in your browser (**Chrone is the best choice**).
6. Get fake `MATIC token` from some faucet website like [Option1](https://mumbaifaucet.com/) or [Option2](https://faucet.polygon.technology/).
7. Create more accouts and transfer some `MATIC Token` to them.
8. Compile hardhat project by typing `npx hardhat compile`.
9. Run test case by typing `npx hardhat test`.
10. Deploy the Smart Contract on `Mumbai Testnet` by typing `npx hardhat run scripts/Deploy --network mumbai`.
11. Copy both `RewardToken` and `Staking` deployment address somewhere.
12. Replace in the `client` directory in all components that require these two contract address with the deployed one.
13. Move to client directory by typing `cd client`.
14. Install all dependencies by typing `npm install`. If **yarn** is required, install it by typing `npm install --global yarn`.
15. Run App in development mode by typing `npm run dev`.
16. Connect the DApp with Matamask wallet.
17. Import `Reward Token` in the Main Account added before to see `RT` token balance.
18. Transfer some `Reward Token` or `RT` to others account, and then import on then `RewardToken` contract address to see token sent.
19. Send some token to `Staking Contract` to be used for rewards.
20. Stake token from differents accounts.
21. Perform `Claim Reward`, to get back the earn to user account.
22. Finally, `Withraw` RT token to **Unstake tokens**.

## Steps for the project

---

1. Writting Smart Contract on Remix IDE.
2. Testing Smart Contract Behaviour on Remix IDE.
3. Setup Hardhat project.
4. Writting test cases.
5. Setting up Metamask Wallet.
6. Deploy the Smart Contract on Testnet (Mumbai, Goerli or other testnets).
7. Run client side.
8. Test Stake Defi DApp.

## UI Screenshots

---

### Dashboard

![1-Dashboard](https://user-images.githubusercontent.com/15903230/214300425-3107331b-489e-4632-bfd3-9b01484332c4.png)

### Approve Stake tokens

![2-Approve Staking Tx](https://user-images.githubusercontent.com/15903230/214303224-4e5cee51-5d3f-4d11-aad6-b013ca9e633c.png)

### Confirm Stake tokens

![3-Confirm Staking Tx](https://user-images.githubusercontent.com/15903230/214303636-c407e4d2-e7d3-4fd6-b1c3-aa3176f3458a.png)

### Claim rewards

![4-Claim Rewards](https://user-images.githubusercontent.com/15903230/214303959-df0aada4-604d-4acc-81a7-417d3e4dcf7a.png)

### Reward already claimed

![5-No more rewards token to claim](https://user-images.githubusercontent.com/15903230/214304164-0828255f-bfc1-49bd-9326-67c419dd1cf0.png)

### Withdraw token

![6-Withdraw tokens](https://user-images.githubusercontent.com/15903230/214304266-36bd0ef0-6a08-49ec-bae0-c576f136ae6e.png)

### Mentor

Thanks to [Sanjeevan](https://github.com/sanjeevan121) for his amazing explanations.
