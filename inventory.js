let inventory = [];

function openInventory(inventory, callBack) {
  if (inventory.length === 0) {
    console.log("\nEmpty \n");
  }
  for (let i = 0; i < inventory.length; i++) {
    console.log("\n", inventory[i], "\n");
  }
  callBack();
}

module.exports = { inventory, openInventory };
