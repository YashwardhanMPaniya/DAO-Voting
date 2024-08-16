const { network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  // If we are on a local development network, we need to deploy mocks!
  if (chainId == 31337) {
    log("Local network detected! Deploying DAO...");
    await deploy("DAO", {
      from: deployer,
      log: true,
      //args: [""],
    });

    log("DAO Deployed!");
  }
};
module.exports.tags = ["DAO"];
