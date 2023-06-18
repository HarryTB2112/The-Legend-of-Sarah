const TyperEffect = require("typer-effect");

const colors = require("ansi-colors");
const prompt = require("prompt-sync")();
const { serenoMap } = require("./maps/sereno/serenoMap");
let running = true;

const textDelayer = (str, promptValue, callBack) => {
  let i = 0;
  let timer = setInterval(() => {
    process.stdout.write(str[i]);
    i++;
    if (i >= str.length) {
      process.stdout.write("\n");
      clearInterval(timer);
    }
  }, 50);

  let amount = (str.length + 25) * 50;

  setTimeout(() => {
    promptValue = String(prompt(""));
    skipIntroValue = promptValue;

    while (
      promptValue[0] !== "y" &&
      promptValue[0] !== "n" &&
      promptValue !== "go west" &&
      promptValue !== "go east" &&
      promptValue !== "help" &&
      promptValue !== "go north" &&
      promptValue !== "go south" &&
      promptValue !== "inventory"
    ) {
      promptValue = String(prompt("Y/N ")).toLowerCase().trim();
      skipIntroValue = promptValue;
    }
    callBack(promptValue);
  }, amount);
};

while (running) {
  let skipIntroValue = "";

  const introCutScene = (value) => {
    if (value === "n") {
      console.log("HIYA");
      mainText = "Dumb dumb";
      textDelayer(mainText, "", serenoMap);
      // console.log(
      //   colors.cyan.bgGreen(
      //     "In 'The Legend of Sarah,' prepare to embark on an unforgettable odyssey, where courage, wisdom, and the power of the heart will be tested. Will Simon rise to the challenge, defeat the evil Tombyrne, and become the hero LaFosse desperately needs? \nThe legend awaits, and his legacy is about to unfold. \n \nIn the tranquil village of Sereno, nestled amidst lush forests and rolling hills, you, a young and courageous boy named Simon, reside. \nWith an unyielding spirit and a deep sense of adventure, you have always felt a connection to the ancient legends that echo through his homeland.\n \nType 'help' to open the menu at any point\n \nType 'inventory' to open the Inventory at any point \n \nYou awake from your slumber, Simon, a young adventurer with only a creaky house to his name.\nOn the search for adventure you dress in your garbs and exit your shack.\n \nA notice has been posted on your front door: \n'The Princess Sarah has been kidnapped by the evil Tombyrne, take up arms adventurers!'\n"
      //   )
      // );
    }
  };
  let mainText =
    "Hi there, Welcome to The Legend of Sarah\n\nThe legend\n\nWould you like to skip the introduction? Y/N ";
  textDelayer(mainText, skipIntroValue, introCutScene);

  running = false;
}

module.exports = textDelayer;
