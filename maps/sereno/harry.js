import { inventory } from "../../inventory.js";

const harry = (callBack) => {
  if (inventory.includes("LaFossian Shield")) {
    console.log("\nI shouldn't pester Harry... He seems upset\n");
    callBack();
  }

  console.log(
    "\n'Yo Simon!' Harry says. \n'I think the adventuring days are over for me since I took a bokoblin arrow to the knee' \nHe shows a shiny engraved shield to you \n'I want you to have this, I wont be needing it anymore'\n"
  );
  inventory.push("LaFossian Shield");
  callBack();
};

export { harry};
