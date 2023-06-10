const prompt = require("prompt-sync")();

const serenoCenter = (value) => {
  value = "";
  while (
    value !== "go west" &&
    value !== "go east" &&
    value !== "help" &&
    value !== "go north" &&
    value !== "go south" &&
    value !== "inventory"
  ) {
    // console.log("You cannot do that");
    console.log(
      "You see the forest to the west and the entrance to the castle grounds to the east...\n"
    );
    console.log(
      "To the north you see a buff looking man, and to the south you see an incredibly handsome bloke \n"
    );
    value = String(prompt("")).toLowerCase();
  }
  return value;
};

const showMenu = () => {
  console.log("Menu");
};

module.exports = { serenoCenter, showMenu };
