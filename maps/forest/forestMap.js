const { forestCenter } = require("../../mapFunctions");
const { stream } = require("./stream");
const { inventory, openInventory } = require("../../inventory");

const forestMap = () => {
  let forestCenterValue = "";

  forestCenterValue = forestCenter(forestCenterValue);

  if (forestCenterValue === "go north") {
    stream(forestMap);
  }

  if (forestCenterValue === "inventory") {
    openInventory(inventory, forestMap);
  }
};

module.exports = forestMap;
