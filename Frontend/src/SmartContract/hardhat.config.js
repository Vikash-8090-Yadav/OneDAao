
require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "Testnet",
  networks:{
    hardhat:{},
    Testnet: {
      chainId: 5555,
      url: "https://rpc-kura.cross.technology/",
      accounts: ["4a781980d6c8b748ff8e76599d17dd997ebbd2fead313c30f303ac0251a9aa10"],
    }
  }
};