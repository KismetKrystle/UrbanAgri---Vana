import { expect } from "chai";
import { ethers } from "hardhat";
import { UrbanAgriDLP, RewardToken } from "../typechain-types";

describe("UrbanAgriDLP", function () {
  let urbanAgriDLP: UrbanAgriDLP;
  let rewardToken: RewardToken;
  let owner: any;
  let addr1: any;
  let addr2: any;

  const INITIAL_SUPPLY = ethers.parseEther("1000000");
  const STAKE_AMOUNT = ethers.parseEther("1000");
  const CHALLENGE_FEE = ethers.parseEther("100");

  before(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy RewardToken
    const RewardTokenFactory = await ethers.getContractFactory("RewardToken");
    rewardToken = await RewardTokenFactory.deploy("Urban Agri Token", "UAT", owner.address) as RewardToken;
    await rewardToken.waitForDeployment();

    // Mint initial supply
    await rewardToken.mint(owner.address, INITIAL_SUPPLY);

    // Deploy UrbanAgriDLP
    const UrbanAgriDLPFactory = await ethers.getContractFactory("UrbanAgriDLP");
    urbanAgriDLP = await UrbanAgriDLPFactory.deploy(
      owner.address,
      "Urban Agriculture DLP",
      "Data Liquidity Pool for Urban Agriculture",
      await rewardToken.getAddress(),
      ethers.parseEther("1") // communityRewardPerSolution
    ) as UrbanAgriDLP;
    await urbanAgriDLP.waitForDeployment();

    // Approve UrbanAgriDLP to spend reward tokens
    await rewardToken.approve(await urbanAgriDLP.getAddress(), INITIAL_SUPPLY);
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await urbanAgriDLP.owner()).to.equal(owner.address);
    });

    it("Should set the correct name and description", async function () {
      expect(await urbanAgriDLP.name()).to.equal("Urban Agriculture DLP");
      expect(await urbanAgriDLP.description()).to.equal("Data Liquidity Pool for Urban Agriculture");
    });

    it("Should set the correct reward token", async function () {
      expect(await urbanAgriDLP.rewardToken()).to.equal(await rewardToken.getAddress());
    });
  });

  describe("Staking", function () {
    it("Should allow users to stake tokens", async function () {
      await rewardToken.transfer(addr1.address, STAKE_AMOUNT);
      await rewardToken.connect(addr1).approve(await urbanAgriDLP.getAddress(), STAKE_AMOUNT);
      await urbanAgriDLP.connect(addr1).stake(STAKE_AMOUNT);
      expect(await urbanAgriDLP.stakedBalance(addr1.address)).to.equal(STAKE_AMOUNT);
    });
  });

  describe("Challenge Creation", function () {
    it("Should allow users to create challenges", async function () {
      await urbanAgriDLP.connect(addr1).createChallenge("Improve urban farm water efficiency");
      const challenge = await urbanAgriDLP.getChallenge(1);
      expect(challenge.description).to.equal("Improve urban farm water efficiency");
      expect(challenge.creator).to.equal(addr1.address);
    });
  });

  describe("Solution Submission", function () {
    it("Should allow users to submit solutions", async function () {
      await urbanAgriDLP.connect(addr2).submitSolution(1, "Implement drip irrigation system");
      const solution = await urbanAgriDLP.getSolution(1, 1);
      expect(solution.description).to.equal("Implement drip irrigation system");
      expect(solution.solver).to.equal(addr2.address);
    });
  });

  describe("Solution Validation", function () {
    it("Should allow stakers to validate solutions", async function () {
      await urbanAgriDLP.connect(addr1).validateSolution(1, 1, true);
      const solution = await urbanAgriDLP.getSolution(1, 1);
      expect(solution.validations).to.equal(1);
    });
  });

  describe("Reward Distribution", function () {
    it("Should distribute rewards correctly", async function () {
      const initialBalance = await rewardToken.balanceOf(addr2.address);
      await urbanAgriDLP.distributeRewards(1, 1);
      const finalBalance = await rewardToken.balanceOf(addr2.address);
      expect(finalBalance).to.be.gt(initialBalance);
    });
  });
});
