import { expect } from 'chai';
import { ethers } from 'hardhat';
import { parseEther } from 'ethers';
import { UAVToken } from '../typechain-types';

describe('UAVToken', () => {
  let deployer: any, owner: any, admin: any, user1: any, user2: any, user3: any, user4: any;
  let uavToken: UAVToken;

  const deploy = async () => {
    [deployer, owner, admin, user1, user2, user3, user4] = await ethers.getSigners();
    const UAVTokenFactory = await ethers.getContractFactory('UAVToken');
    uavToken = (await UAVTokenFactory.deploy('Urban Agri Token', 'UAV', owner.address)) as UAVToken;
    await uavToken.deployed();
    await uavToken.connect(owner).changeAdmin(admin.address);
  };

  describe('UAVToken', () => {
    beforeEach(async () => {
      await deploy();
    });

    it('should have correct params after deploy', async function () {
      expect(await uavToken.owner()).to.equal(owner.address);
      expect(await uavToken.admin()).to.equal(admin.address);
      expect(await uavToken.name()).to.equal('Urban Agri Token');
      expect(await uavToken.symbol()).to.equal('UAV');
      expect(await uavToken.mintBlocked()).to.be.false;
    });

    it('should transfer ownership in 2 steps', async function () {
      await uavToken.connect(owner).transferOwnership(user2.address);
      expect(await uavToken.owner()).to.equal(owner.address);
      await uavToken.connect(owner).transferOwnership(user3.address);
      expect(await uavToken.owner()).to.equal(owner.address);
      await uavToken.connect(user3).acceptOwnership();
      expect(await uavToken.owner()).to.equal(user3.address);
    });

    it('should reject transferOwnership when non-owner', async function () {
      await expect(uavToken.connect(admin).transferOwnership(user2.address)).to.be.revertedWith(
        `UnauthorizedAdminAction("${admin.address}")`
      );
    });

    it('should change admin when owner', async function () {
      await uavToken.connect(owner).changeAdmin(user2.address);
      expect(await uavToken.admin()).to.equal(user2.address);
    });

    it('should reject changeAdmin when non-owner', async function () {
      await expect(uavToken.connect(admin).changeAdmin(user2.address)).to.be.revertedWith(
        `UnauthorizedAdminAction("${admin.address}")`
      );
    });

    it('should block mint when owner', async function () {
      await uavToken.connect(owner).blockMint();
      expect(await uavToken.mintBlocked()).to.be.true;
    });

    it('should reject blockMint when non-owner', async function () {
      await expect(uavToken.connect(admin).blockMint()).to.be.revertedWith(
        `UnauthorizedAdminAction("${admin.address}")`
      );
    });

    it('should mint when owner', async function () {
      const mintAmount = parseEther('100');
      expect(await uavToken.balanceOf(user2.address)).to.equal(0);
      await uavToken.connect(owner).mint(user2.address, mintAmount);
      expect(await uavToken.balanceOf(user2.address)).to.equal(mintAmount);
    });

    it('should reject mint when non-owner', async function () {
      await expect(uavToken.connect(admin).mint(user1.address, parseEther('10'))).to.be.revertedWith(
        `UnauthorizedAdminAction("${admin.address}")`
      );
    });

    it('should reject mint when minting is blocked', async function () {
      await uavToken.connect(owner).blockMint();
      await expect(uavToken.connect(owner).mint(user1.address, parseEther('10'))).to.be.revertedWith('EnforceMintBlocked()');
    });

    it('should block address when admin', async function () {
      expect(await uavToken.blockListLength()).to.equal(0);
      await uavToken.connect(admin).blockAddress(user2.address);
      expect(await uavToken.blockListLength()).to.equal(1);
      expect(await uavToken.blockListAt(0)).to.equal(user2.address);
    });

    it('should reject blockAddress when non-admin', async function () {
      await expect(uavToken.connect(user3).blockAddress(user2.address)).to.be.revertedWith(
        `UnauthorizedAdminAction("${user3.address}")`
      );
    });

    it('should unblock address when admin', async function () {
      await uavToken.connect(admin).blockAddress(user2.address);
      await uavToken.connect(admin).unblockAddress(user2.address);
      expect(await uavToken.blockListLength()).to.equal(0);
    });

    it('should reject unblockAddress when non-admin', async function () {
      await expect(uavToken.connect(user3).unblockAddress(user2.address)).to.be.revertedWith(
        `UnauthorizedAdminAction("${user3.address}")`
      );
    });

    it('should transfer tokens', async function () {
      const mintAmount = parseEther('100');
      const transferAmount = parseEther('20');
      await uavToken.connect(owner).mint(user1.address, mintAmount);
      expect(await uavToken.balanceOf(user1.address)).to.equal(mintAmount);
      expect(await uavToken.balanceOf(user2.address)).to.equal(0);
      expect(await uavToken.totalSupply()).to.equal(mintAmount);
      await uavToken.connect(user1).transfer(user2.address, transferAmount);
      expect(await uavToken.balanceOf(user1.address)).to.equal(mintAmount - transferAmount);
      expect(await uavToken.balanceOf(user2.address)).to.equal(transferAmount);
      expect(await uavToken.totalSupply()).to.equal(mintAmount);
    });

    it('should reject transfer when blocked', async function () {
      const mintAmount = parseEther('100');
      const transferAmount = parseEther('20');
      await uavToken.connect(admin).blockAddress(user2.address);
      await uavToken.connect(owner).mint(user2.address, mintAmount);
      expect(await uavToken.balanceOf(user2.address)).to.equal(mintAmount);
      expect(await uavToken.balanceOf(user3.address)).to.equal(0);
      expect(await uavToken.totalSupply()).to.equal(mintAmount);
      await expect(uavToken.connect(user2).transfer(user3.address, transferAmount)).to.be.revertedWith(
        `UnauthorizedUserAction("${user2.address}")`
      );
      expect(await uavToken.balanceOf(user2.address)).to.equal(mintAmount);
      expect(await uavToken.balanceOf(user3.address)).to.equal(0);
      expect(await uavToken.totalSupply()).to.equal(mintAmount);
    });

    it('should transfer when unblocked', async function () {
      const mintAmount = parseEther('100');
      const transferAmount = parseEther('20');
      await uavToken.connect(admin).blockAddress(user2.address);
      await uavToken.connect(owner).mint(user2.address, mintAmount);
      expect(await uavToken.balanceOf(user2.address)).to.equal(mintAmount);
      expect(await uavToken.balanceOf(user3.address)).to.equal(0);
      expect(await uavToken.totalSupply()).to.equal(mintAmount);
      await expect(uavToken.connect(user2).transfer(user3.address, transferAmount)).to.be.revertedWith(
        `UnauthorizedUserAction("${user2.address}")`
      );
      expect(await uavToken.balanceOf(user2.address)).to.equal(mintAmount);
      expect(await uavToken.balanceOf(user3.address)).to.equal(0);
      expect(await uavToken.totalSupply()).to.equal(mintAmount);
      await uavToken.connect(admin).unblockAddress(user2.address);
      await uavToken.connect(user2).transfer(user3.address, transferAmount);
      expect(await uavToken.balanceOf(user2.address)).to.equal(mintAmount - transferAmount);
      expect(await uavToken.balanceOf(user3.address)).to.equal(transferAmount);
      expect(await uavToken.totalSupply()).to.equal(mintAmount);
    });
  });
});
