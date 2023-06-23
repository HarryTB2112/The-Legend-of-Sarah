import { alex } from "./alex.js";
import { harry } from "./harry.js";
import { forestRoad } from "./forestRoad.js";
import { forestMap } from "../forest/forestMap.js";
import { serenoCenter } from "../../mapFunctions.js";
import { inventory, openInventory } from "../../inventory.js";
import { textDelayer } from "../../index.js";

const serenoMapFunc = (promptValue) => {
  let serenoCenterValue = promptValue;
  if (promptValue === " " || promptValue === "y") {
    serenoCenterValue = serenoCenter(serenoCenterValue);
  }

  if (serenoCenterValue === "go north") {
    alex(serenoMapFunc);
  }

  if (serenoCenterValue === "go south") {
    harry(serenoMapFunc);
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
    serenoMapFunc();
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
    openInventory(inventory, serenoMapFunc);
  }

  if (serenoCenterValue === "help") {
    showMenu();
  }
};

export { serenoMapFunc };
