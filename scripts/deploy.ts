import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    //setup deploy
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);

    //deploy BSSToken
    const BSSToken = await ethers.getContractFactory('BSSToken');
    const bssToken = await BSSToken.deploy();
    console.log('BSSToken address: ', await bssToken.getAddress());
    Config.setConfig(network + '.BSSToken', await bssToken.getAddress());

    //deploy Vault
    const Vault = await ethers.getContractFactory('Vault');
    const vault = await Vault.deploy();
    console.log('Vault address: ', await vault.getAddress());
    Config.setConfig(network + '.Vault', await vault.getAddress());

    await Config.updateConfig()
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
