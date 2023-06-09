const colors = require("ansi-colors");
const prompt = require("prompt-sync")();
const { serenoCenter, showMenu } = require("./mapFunctions");
const { inventory, openInventory } = require("./inventory");
let running = true;
// let help = "Press (Q) to quit or (I)";

while (running === true) {
  console.log("Hi there! Welcome to The Legend of Sarah");

  let skipIntro = 0;
  while (skipIntro[0] !== "y" && skipIntro[0] !== "n") {
    skipIntro = String(prompt("Would you like to skip the introduction? Y/N "))
      .toLowerCase()
      .trim();
  }
  if (skipIntro[0] === "n") {
    console.log(
      colors.cyan.bgGreen(
        "In 'The Legend of Sarah,' prepare to embark on an unforgettable odyssey, where courage, wisdom, and the power of the heart will be tested. Will Simon rise to the challenge, defeat the evil Tombyrne, and become the hero LaFosse desperately needs? The legend awaits, and his legacy is about to unfold."
      )
    );
  }

  console.log(
    "In the tranquil village of Sereno, nestled amidst lush forests and rolling hills, you, a young and courageous boy named Simon, reside. With an unyielding spirit and a deep sense of adventure, you have always felt a connection to the ancient legends that echo through his homeland.\nType 'help' to open the menu at any point\n"
  );

  console.log("Type 'inventory' to open the Inventory at any point");

  console.log(
    "You awake from your slumber, Simon, a young adventurer with only a creaky house to his name.\nOn the search for adventure you dress in your garbs and exit your shack.\n \nA notice has been posted on your front door: \n'The Princess Sarah has been kidnapped by the evil Tombyrne, take up arms adventurers!'\n"
  );

  let serenoCenterValue = "";

  serenoCenterValue = serenoCenter(serenoCenterValue);

  if (serenoCenterValue === "inventory") {
    openInventory(inventory);
  }

  if (serenoCenterValue === "go west") {
    console.log("Travel west");
  }

  if (serenoCenterValue === "go east") {
    console.log("travel east");
  }
  if (serenoCenterValue === "go north") {
    console.log(
      "'Ho there Simon! Are you here for sword training' Alex says. \nYou were about to turn away until you realised, you need a sword to rescue Princess Sarah! \nYou agree with Alex and enter the traning ground \nHe provides you with a rusty training sword! \nWhile Alex is distracted training rookies, you sneak out the back with your newly aquired sword"
    );
    inventory.push("Traning Sword");
  }
  if (serenoCenterValue === "go south") {
    console.log("travel east");
  }

  if (serenoCenterValue === "help") {
    showMenu();
  }

  running = false;
}
