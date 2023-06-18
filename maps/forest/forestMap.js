import { forestCenter } from "../../mapFunctions.js";
import { stream } from "./stream.js";
import { cave } from "./cave.js";
import { inventory, openInventory } from "../../inventory.js";

const forestMap = () => {
  let forestCenterValue = "";

  forestCenterValue = forestCenter(forestCenterValue);

  if (forestCenterValue === "go north") {
    stream(forestMap);
  }

  if (forestCenterValue === "go west") {
    cave(forestMap);
  }

  if (forestCenterValue === "inventory") {
    openInventory(inventory, forestMap);
  }
};

export { forestMap }
