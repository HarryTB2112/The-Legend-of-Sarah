const { inventory } = require("../../inventory");

const stream = (callBack) => {
  if (inventory.includes("Key 2")) {
    console.log(
      "\nI have already explored here. \nYou turn back to the forest clearing. \n"
    );
    callBack();
  }

  console.log(
    "\nYou arrive at the stream and go to fill your canteen up with the water. \nAs you dip your hand into the cold water, it begins to freeze. \nYou pull your hand back out sharply in shock and look up to see an icy Chuchu. \n"
  );

  console.log(
    "The Chuchu fires an icy blob at your sword and shield and freezes them to the ground. \nWith quick thinking, you pull your lantern from your belt and throw it at the pile of goo. \n"
  );

  console.log(
    "The ball of ice melts away and you find another key within the puddle! \n"
  );
  inventory.push("Key 2");
  callBack();
};

module.exports = { stream };
