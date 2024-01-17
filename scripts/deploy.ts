import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    //setup deploy
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);

    //deploy BSSToken
    // const BSSToken = await ethers.getContractFactory('BSSToken');
    // const bssToken = await BSSToken.deploy();
    // console.log('BSSToken address: ', await bssToken.getAddress());
    // Config.setConfig(network + '.BSSToken', await bssToken.getAddress());

    //deploy Vault
    // const Vault = await ethers.getContractFactory('Vault');
    // const vault = await Vault.deploy();
    // console.log('Vault address: ', await vault.getAddress());
    // Config.setConfig(network + '.Vault', await vault.getAddress());

    //deploy USDT
    // const USDT = await ethers.getContractFactory('USDT');
    // const usdt = await USDT.deploy();
    // console.log('USDT address: ', await usdt.getAddress());
    // Config.setConfig(network + '.USDT', await usdt.getAddress());

    //deploy ICO
    const ICO = await ethers.getContractFactory('BSSCrowdSale');
    const ico = await ICO.deploy(
        10000,
        10,
        '0x54cA83bcD2b8b756eD272D95f0f5fd44F87adc99',
        '0x8c22ca2e9Fe108619058d5B02070aC603D7eD886'
    );
    console.log('ICO address: ', await ico.getAddress());
    Config.setConfig(network + '.ICO', await ico.getAddress());

    await Config.updateConfig();
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
