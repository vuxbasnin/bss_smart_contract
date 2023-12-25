const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('BSSToken contract', () => {
    beforeEach(async () => {
        [owner, address_1, address_2] = await ethers.getSigners();
        BSSToken = await ethers.getContractFactory('BSSToken');
        hardhatToken = await BSSToken.deploy(owner.address);
    });

    it('Deployment should assign the total supply of tokens to the owner', async () => {
        const ownerBalance = await hardhatToken.balanceOf(owner.address);

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });

    it('Should transfer token between accounts', async () => {
        //Transfer token from owner to account_1
        await hardhatToken.transfer(address_1.address, 50);
        expect(await hardhatToken.balanceOf(address_1.address)).to.equal(50);

        //Transfer token from owner to account_1
        await hardhatToken.connect(address_1).transfer(address_2.address, 50);
        expect(await hardhatToken.balanceOf(address_2.address)).to.equal(50);
        expect(await hardhatToken.balanceOf(address_1.address)).to.equal(0);
    });
});
