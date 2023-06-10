const { forestCenter } = require("../../mapFunctions");
const { stream } = require("./stream");
const { inventory, openInventory } = require("../../inventory");

const forestMap = () => {
  let forestCenterValue = "";

  forestCenterValue = forestCenter(forestCenterValue);

  if (forestCenterValue === "go north") {
    stream(forestMap);
  }
};

module.exports = forestMap;
