import promptSync from "prompt-sync"; 
const prompt = promptSync()

const serenoCenter = (value) => {
  value = "";
  while (
    value !== "go west" &&
    value !== "go east" &&
    value !== "help" &&
    value !== "go north" &&
    value !== "go south" &&
    value !== "inventory"
  ) {
    // console.log("You cannot do that");
    console.log(
      "\nYou see the forest to the west and the entrance to the castle grounds to the east...\nTo the north you see a buff looking man, and to the south you see an incredibly handsome bloke \n"
    );
    value = String(prompt("")).toLowerCase();
  }
  return value;
};

const forestCenter = (value) => {
  value = "";
  while (
    value !== "go west" &&
    value !== "go east" &&
    value !== "help" &&
    value !== "go north" &&
    value !== "go south" &&
    value !== "inventory"
  ) {
    // console.log("You cannot do that");
    console.log(
      "\nHidden within the enchanted forest lies the Cursed Grove, a foreboding clearing enveloped in an eerie mist. \nOnce a thriving haven of life, it now stands as a twisted mockery of nature. \nWithered trees claw at the sky, while a malefic aura suffocates the air. \nDecaying foliage carpets the tainted ground, and the whispers of ancient incantations echo through the stillness. \nBeware the mutated creatures that prowl its shadows and the ghostly apparitions that haunt its periphery. \n \nOnly the boldest adventurers dare to step foot within this accursed domain, braving the ethereal forces that linger, seeking to unveil its secrets or risk becoming another lost soul in its grasp. \n \nSimon is scared. \n \nYou see a small cave to the west and the road back to Sereno to the east...\nTo the north you see a dark stream, and to the south you see a clearing with a faint glint in the distance \n"
    );
    value = String(prompt("")).toLowerCase();
  }
  return value;
};

const showMenu = () => {
  console.log("Menu");
};

export { serenoCenter, forestCenter, showMenu };
