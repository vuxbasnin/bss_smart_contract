import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract } from '@ethersproject/contracts';
import { HardhatEthersSigner, SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import * as chai from 'chai';
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
import { keccak256 } from 'ethers';

function parseEther(_amount: Number) {
    return ethers.parseUnits(_amount.toString(), 0);
}

describe('Vault', function () {
    let owner: SignerWithAddress,
        alice: SignerWithAddress,
        bob: SignerWithAddress,
        carol: SignerWithAddress;

    let vault: Contract;
    let token: Contract;

    beforeEach(async () => {
        await ethers.provider.send('hardhat_reset', []);
        [owner, alice, bob, carol] = await ethers.getSigners();

        const Vault = await ethers.getContractFactory('Vault', owner);
        vault = await Vault.deploy();
        const Token = await ethers.getContractFactory('BSSToken', owner);
        token = await Token.deploy();
        console.log("NINVB ", token);
        await vault.setToken(token.address);
    });

    //Happy Path
    it('Should deposit into the Vault', async () => {
        await token.transfer(alice.address, parseEther(1 * 10 ** 6))
        await token.connect(alice.address).approve(vault.address, token.balanceOf(alice.address));
        await vault.connect(alice.address).deposit(parseEther(500 * 10 ** 3))
        expect(await token.balanceOf(vault.address)).equal(parseEther(500 * 10 ** 3))
    });
});
