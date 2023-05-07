// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 

  const BioToken = await hre.ethers.getContractFactory("BioToken");
  const bioToken = await BioToken.deploy("BioToken", "CBIO", "0x0172ae13E3583BF565957095D27caede3Abb172e");
  await bioToken.deployed();

  const RetiredBioToken = await hre.ethers.getContractFactory("RetiredBioToken");
  const retiredBioToken = await RetiredBioToken.deploy("RetiredBioToken", "RCBIO", bioToken.address);
  await retiredBioToken.deployed();

  await bioToken.setRetiredBioToken(retiredBioToken.address);
  console.log(bioToken.address);

  console.log(await retiredBioToken.bioToken());

  const address = await bioToken.retiredBioToken();
  console.log(
    `BioToken deployed to ${bioToken.address}
    RetiredBioToken deployed to ${retiredBioToken.address}
    Confirmation
    `
  );

  const b1 = hre.ethers.BigNumber.from("1000000000000000000000000");
  const b2 = hre.ethers.BigNumber.from("500000000000000000");
  
  const balanceRetire = await retiredBioToken.balanceOf("0xbA1B7FD1dAdD6000514b2Fc3156E8Ef2Ffd136bc");
  
  const balance = hre.ethers.utils.formatEther(balanceRetire)

  console.log(balanceRetire)

  const tx = await bioToken.mint("0xbA1B7FD1dAdD6000514b2Fc3156E8Ef2Ffd136bc", b1);
  await tx.wait()

  const balance1 = await bioToken.balanceOf("0xbA1B7FD1dAdD6000514b2Fc3156E8Ef2Ffd136bc");
  const balance1Format = hre.ethers.utils.formatEther(balance1)
  console.log(balance1Format)
  console.log(hre.ethers.utils.formatEther(b2))

  await bioToken.retire( b2); 


  console.log(
    `BioToken deployed to ${bioToken.address}
    RetiredBioToken deployed to ${retiredBioToken.address}
    Check: ${address}
    Balance: ${balance}
    Confirmation
    `
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
