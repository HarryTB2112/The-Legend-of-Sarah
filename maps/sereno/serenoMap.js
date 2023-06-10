const alex = require("./alex");
const harry = require("./harry");
const { serenoCenter } = require("../../mapFunctions");
const { inventory, openInventory } = require("../../inventory");

const serenoMap = () => {
  let serenoCenterValue = "";

  serenoCenterValue = serenoCenter(serenoCenterValue);

  //   if (serenoCenterValue === "go west") {
  //     forestMap();
  //   }

  //   if (serenoCenterValue === "go east") {
  //     console.log("travel east");
  //   }
  if (serenoCenterValue === "go north") {
    alex(serenoMap);
  }

  if (serenoCenterValue === "go south") {
    harry(serenoMap);
  }

  if (serenoCenterValue === "inventory") {
    openInventory(inventory, serenoMap);
  }

  //   if (serenoCenterValue === "go south") {
  //     console.log("travel east");
  //   }

  //   if (serenoCenterValue === "help") {
  //     showMenu();
  //   }
};

module.exports = { serenoMap };
