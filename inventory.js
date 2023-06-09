let inventory = [];

function openInventory(inventory) {
  if (inventory.length === 0) {
    console.log("Empty");
  }
  for (let i = 0; i < inventory.length; i++) {
    console.log(inventory[i]);
  }
}

module.exports = { inventory, openInventory };
