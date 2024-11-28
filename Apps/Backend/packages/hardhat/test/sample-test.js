const { expect } = require("chai");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!"); // No need for .deployed()

    // Test initial greeting
    expect(await greeter.greet()).to.equal("Hello, world!");

    // Set a new greeting
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    await setGreetingTx.wait();

    // Test updated greeting
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
