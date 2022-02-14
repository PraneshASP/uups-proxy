const assert = require("assert");

before("fetch artifacts", async function () {
  this.Pizza = await hre.ethers.getContractFactory("Pizza");
  this.slices = "8";
  this.pizza = await hre.upgrades.deployProxy(this.Pizza, [this.slices]);

  this.PizzaV2 = await hre.ethers.getContractFactory("PizzaV2");
});

it("sets slices", async function () {
  assert((await this.pizza.slices()).toString() == this.slices);
});

it("eats pizza", async function () {
  await this.pizza.eatSlice();
  assert((await this.pizza.slices()).toString() == this.slices - 1);
});

it("refills pizza - upgrade", async function () {
  const pizzaV2 = await hre.upgrades.upgradeProxy(this.pizza, this.PizzaV2);

  await pizzaV2.refillSlice();

  assert((await pizzaV2.pizzaVersion()).toString() == 2);
  assert((await pizzaV2.slices()).toString() == this.slices);
});
