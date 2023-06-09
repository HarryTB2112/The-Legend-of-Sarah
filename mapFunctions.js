const prompt = require("prompt-sync")();

const serenoCenter = (value) => {
  while (value !== "go west" && value !== "go east" && value !== "help") {
    // console.log("You cannot do that");
    value = String(
      prompt(
        "You see the forest to the west and the entrance to the castle grounds to the east: "
      )
    ).toLowerCase();
  }
  return value;
};

const showMenu = () => {
  console.log("Menu");
};

module.exports = { serenoCenter, showMenu };
