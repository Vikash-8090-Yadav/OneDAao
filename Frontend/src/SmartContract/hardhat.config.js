
require ('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",

  ddefaultNetwork: "Kura",
  networks:{
    hardhat:{},
    Kura: {
      url: "https://rpc-kura.cross.technology/" || "",
      chainId: 5555,
      accounts: ['4a781980d6c8b748ff8e76599d17dd997ebbd2fead313c30f303ac0251a9aa10']
    },
  },
};
