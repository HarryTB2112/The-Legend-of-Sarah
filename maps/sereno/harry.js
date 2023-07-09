import { textDelayer } from "../../index.js";
import { serenoCenter } from "../../mapFunctions.js";

const harry = (inventory) => {
  let text;
  if (inventory.length > 0 && inventory.includes("LaFossian Shield")) {
    text = "\nI shouldn't pester Harry... He seems upset\n";
    textDelayer(text, serenoCenter, undefined, "n");
  } else {
    text =
      "\n'Yo Simon!' Harry says. \n'I think the adventuring days are over for me since I took a bokoblin arrow to the knee' \nHe shows a shiny engraved shield to you \n'I want you to have this, I wont be needing it anymore'. You wander back with your newly acquired shield\n";

    inventory.push("LaFossian Shield");
    textDelayer(text, serenoCenter, undefined, "n");
  }
};

export { harry };
