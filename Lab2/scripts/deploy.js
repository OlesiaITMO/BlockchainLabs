const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const tokenName = process.env.TOKEN_NAME || "OlesyaToken";
  const tokenSymbol = process.env.TOKEN_SYMBOL || "OLS";

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(tokenName, tokenSymbol);

  await token.waitForDeployment();

  console.log("Deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
