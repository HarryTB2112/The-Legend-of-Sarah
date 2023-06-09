const { inventory } = require("../../inventory");

const harry = (callBack) => {
  console.log(
    "'Yo Simon!' Harry says. \n'I think the adventuring days are over for me since i took a bokoblin arrow to the knee' \nHe shows a shiny engraved shield to you \n'I want you to have this, I wont be needing it anymore'"
  );
  inventory.push("LaFossian Shield");
  callBack();
};

module.exports = harry;
