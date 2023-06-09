const inventory = [];

const openInventory = (inventory) => {
  if (inventory.length === 0) {
    console.log("Empty");
  }
  inventory.forEach((item) => {
    console.log(item);
  });
};

module.exports = { inventory, openInventory };
