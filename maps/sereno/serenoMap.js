const alex = require("./alex");
const harry = require("./harry");
const forestRoad = require("./forestRoad");
const forestMap = require("../forest/forestMap");
const { serenoCenter } = require("../../mapFunctions");
const { inventory, openInventory } = require("../../inventory");

const serenoMap = () => {
  let serenoCenterValue = "";

  serenoCenterValue = serenoCenter(serenoCenterValue);

  if (serenoCenterValue === "go north") {
    alex(serenoMap);
  }

  if (serenoCenterValue === "go south") {
    harry(serenoMap);
  }

  if (
    serenoCenterValue === "go west" &&
    inventory.includes("Training Sword") &&
    inventory.includes("LaFossian Shield") &&
    !inventory.includes("Key 1")
  ) {
    forestRoad(forestMap);
  }

  if (
    serenoCenterValue === "go west" &&
    (!inventory.includes("Training Sword") ||
      !inventory.includes("LaFossian Shield"))
  ) {
    console.log(
      "\nI should find a sword and shield before I go to the forest\n"
    );
    serenoMap();
  }

  if (
    serenoCenterValue === "go west" &&
    inventory.includes("Training Sword") &&
    inventory.includes("LaFossian Shield") &&
    inventory.includes("Key 1")
  ) {
    forestMap();
  }

  if (serenoCenterValue === "go east") {
    console.log("travel east");
  }

  if (serenoCenterValue === "inventory") {
    openInventory(inventory, serenoMap);
  }

  if (serenoCenterValue === "help") {
    showMenu();
  }
};

module.exports = { serenoMap };
