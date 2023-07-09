import { textDelayer } from "../../index.js";
import { serenoCenter } from "../../mapFunctions.js";

const alex = (inventory) => {
  let text;
  if (inventory.length > 0 && inventory.includes("Training Sword")) {
    text =
      "\nI have just stolen one of his swords, I won't be going back there in a hurry! \nYou turn back to Sereno Centre\n";
      textDelayer(text, serenoCenter, undefined, "n");
  } else {
    text =
      "\n'Ho there Simon! Are you here for sword training' Alex says. \nYou were about to turn away until you realised, you need a sword to rescue Princess Sarah! \nYou agree with Alex and enter the traning ground \nHe provides you with a rusty training sword! \nWhile Alex is distracted training rookies, you sneak out the back with your newly acquired sword\n";
  
    inventory.push("Training Sword");
    textDelayer(text, serenoCenter, undefined, "n");

  }

};

export { alex };
