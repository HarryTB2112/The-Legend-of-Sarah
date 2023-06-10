const { inventory } = require("../../inventory");

const cave = (callBack) => {
  if (inventory.includes("Key 3")) {
    console.log(
      "\nI have already explored here. \nYou turn back to the forest clearing. \n"
    );
    callBack();
  }

  console.log(
    "\nYou arrive at the cave, you pick up a burning touch from a brazier at the entrance to light your way. \nThe cave twists and turns this way and that way. \nAfter an hour of exploring you come across a small chest. \nYou open the chest and find another key! \nPutting the key away, you feel a warmth from behind you, and you hear a squelch. \nYou turn to see a bright orange fire Chuchu! \nIt shoots a ball of molten goo at you, which you block with your shield. \nYour shield glows red with heat and burns you, making you drop it. \nYou take your canteen out your belt and, with quick thinking, throw it at the firey blob. \nThe Chuchu extinguishes, allowing you to slice it with you sword, defeating it. \nYou leave the cave the same way you came in, only this time with an extra key! \n"
  );

  inventory.push("Key 3");
  callBack();
};

module.exports = { cave };
