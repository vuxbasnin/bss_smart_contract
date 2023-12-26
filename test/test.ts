import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract } from '@ethersproject/contracts';
import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
import { keccak256 } from 'ethers';

function parseEther(amount: Number) {
    return ethers.parseUnits(amount.toString(), 0)
}
