import { alex } from "./alex.js";
import { harry } from "./harry.js";
import { forestRoad } from "./forestRoad.js";
import { forestMap } from "../forest/forestMap.js";
import { serenoCenter } from "../../mapFunctions.js";
import { inventory, openInventory } from "../../inventory.js";
import { textDelayer } from "../../index.js";

const serenoMapFunc = (promptValue) => {
  let text;
  console.log(inventory);
  let serenoCenterValue = promptValue;
  if (promptValue === " " || promptValue === "y") {
    serenoCenterValue = serenoCenter(serenoCenterValue);
  }

  if (serenoCenterValue === "go north") {
    alex(inventory);
  }

  if (serenoCenterValue === "go south") {
    harry(inventory);
  }

  if (
    serenoCenterValue === "go west" &&
    inventory.includes("Training Sword") &&
    inventory.includes("LaFossian Shield") &&
    inventory.length < 3
  ) {
    console.log("Half WEST");
    console.log(inventory);
    console.log(inventory.length);
    forestRoad(inventory);
  } else if (
    serenoCenterValue === "go west" &&
    inventory.includes("Training Sword") &&
    inventory.includes("LaFossian Shield") &&
    inventory.includes("Key 1") &&
    inventory.length > 2
  ) {
    console.log("FULL WEST");
    console.log(inventory);
    forestMap();
  }

  if (
    serenoCenterValue === "go west" &&
    (!inventory.includes("Training Sword") ||
      !inventory.includes("LaFossian Shield"))
  ) {
    serenoMapFunc();
    text = "\nI should find a sword and shield before I go to the forest\n";
    textDelayer(text, serenoCenter, undefined, "n");
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
