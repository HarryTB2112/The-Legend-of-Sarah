import chalk from "chalk";
import promptSync from "prompt-sync";
const prompt = promptSync();
import { serenoMapFunc } from "./maps/sereno/serenoMap.js";

let running = true;

const textDelayer = (
  str,
  callBackA = undefined,
  callBackB = undefined,
  promptValue = undefined
) => {
  let i = 0;
  let timer = setInterval(() => {
    process.stdout.write(chalk.green.bgWhite.bold(str[i]));
    i++;
    if (i >= str.length) {
      process.stdout.write("\n");
      clearInterval(timer);
    }
  }, 30);

  //do calculations based on string length to determine how long it will take etc.
  let amount = str.length * 1.3 * 30;

  if (callBackA === undefined && callBackB === undefined) {
    null;
  } else {
    setTimeout(() => {
      if (promptValue === undefined) {
        null;
      } else {
        while (
          promptValue !== "y" &&
          promptValue !== "n" &&
          promptValue !== "go west" &&
          promptValue !== "go east" &&
          promptValue !== "help" &&
          promptValue !== "go north" &&
          promptValue !== "go south" &&
          promptValue !== "inventory"
        ) {
          promptValue = String(prompt("")).toLowerCase().trim();
        }
      }
      if (promptValue === undefined) {
        promptValue = " ";
        callBackA(promptValue);
      } else if (promptValue === "y") {
        callBackB(promptValue);
      } else if (promptValue === "n") {
        callBackA();
      } else if (callBackA === undefined) {
        callBackB(promptValue);
      } else {
        callBackA(promptValue);
      }
    }, amount);
  }
};

while (running) {
  let skipIntroValue = " ";

  const introCutScene = () => {
    mainText =
      "\nINTRO\n\nIn 'The Legend of Sarah,' prepare to embark on an unforgettable odyssey, where courage, wisdom, and the power of the heart will be tested. Will Simon rise to the challenge, defeat the evil Tombyrne, and become the hero LaFosse desperately needs? \nThe legend awaits, and his legacy is about to unfold. \n \nIn the tranquil village of Sereno, nestled amidst lush forests and rolling hills, you, a young and courageous boy named Simon, reside. \nWith an unyielding spirit and a deep sense of adventure, you have always felt a connection to the ancient legends that echo through his homeland.\n \nType 'help' to open the menu at any point\n \nType 'inventory' to open the Inventory at any point \n \nYou awake from your slumber, Simon, a young adventurer with only a creaky house to his name.\nOn the search for adventure you dress in your garbs and exit your shack.\n \nA notice has been posted on your front door: \n'The Princess Sarah has been kidnapped by the evil Tombyrne, take up arms adventurers!'\n";
    textDelayer(mainText, serenoMapFunc, undefined, undefined);
  };

  let mainText =
    "Hi there, Welcome to The Legend of Sarah \n\nWould you like to skip the introduction? ";
  textDelayer(mainText, introCutScene, serenoMapFunc, skipIntroValue);

  running = false;
}

export { textDelayer };
