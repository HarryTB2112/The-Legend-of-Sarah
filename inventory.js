let inventory = [];

function openInventory(inventory, callBack) {
  if (inventory.length === 0) {
    console.log("Empty");
  }
  for (let i = 0; i < inventory.length; i++) {
    console.log(inventory[i]);
  }
  callBack();
}

module.exports = { inventory, openInventory };
