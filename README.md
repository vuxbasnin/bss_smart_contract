* BSS Token create by Nin*
  
* Step by step:
  - Create project
  - Install hardhat, hardhat-toolbox, openzeppelin
  - Create => Test => Deploy to testnet => Verify => Interact with smart contract
  - Create Vault smart contract to interact with withdraw

*Note:
  - Use smart contract Vault as ATM Machine to withdraw: NEVER ACCEPT USER DIRECT INTERACTION WITH FUNCTION WITHDRAW OF SMARTCONTRACT
  - When PRIVATE_KEY is exposed, hacker can only withdraw all token in Vault, Owner can set enable and who can withdraw
