const alex = require("./alex");
const harry = require("./harry");

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
    alex();
  }

  if (serenoCenterValue === "go south") {
    harry();
  }

  // if (serenoCenterValue === "inventory") {
  //   openInventory(inventory);
  //}

  //   if (serenoCenterValue === "go south") {
  //     console.log("travel east");
  //   }

  //   if (serenoCenterValue === "help") {
  //     showMenu();
  //   }
};

module.exports = serenoMap;
