const { inventory } = require("../../inventory");

const alex = (callBack) => {
  console.log(
    "'Ho there Simon! Are you here for sword training' Alex says. \nYou were about to turn away until you realised, you need a sword to rescue Princess Sarah! \nYou agree with Alex and enter the traning ground \nHe provides you with a rusty training sword! \nWhile Alex is distracted training rookies, you sneak out the back with your newly acquired sword"
  );
  inventory.push("Training Sword");
  callBack();
};

module.exports = alex;
