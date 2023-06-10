const { inventory } = require("../../inventory");

const forestRoad = (callBack) => {
  console.log(
    "\nWith your rusty sword in hand, you embark along the long and dark road towards the forest \nYou are hoping to find the powerful CSSword and the lost keys to LaFosse Castle.\n"
  );

  console.log(
    "The forest clearing is in sight, when a blob of red jelly drops from a tree infront of you \n'Its a Chuchu!' you gasp. \n"
  );

  console.log(
    "The Chuchu spits a ball of goo at you but you manage to get your LaFossian Shield out in time to block \nYou retaliate by lunging with your training sword to vanquish the beast.\n"
  );

  console.log(
    "Something glistens on the floor amidst the Chuchu goop... Its a key! \nYou pick it up, wipe it clean and add it to your bag.\n"
  );
  inventory.push("Key 1");
  callBack();
};

module.exports = forestRoad;
