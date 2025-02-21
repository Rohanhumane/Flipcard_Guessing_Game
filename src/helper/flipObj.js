import lion from "../assets/images/lion.jpg";
import panda from "../assets/images/panda.jpg";
import cat from "../assets/images/cat.png";
import bear from "../assets/images/bear.jpg";
import fox from "../assets/images/fox.png";
import dear from "../assets/images/dear.jpg";

export const flipObj = [
  { img: lion, label: "Lion", selected: false, id: "flip1" },
  { img: panda, label: "Panda", selected: false, id: "flip2" },
  { img: bear, label: "Bear", selected: false, id: "flip3" },
  { img: fox, label: "Fox", selected: false, id: "flip4" },
  { img: cat, label: "Cat", selected: false, id: "flip5" },
  { img: dear, label: "Dear", selected: false, id: "flip6" },

  { img: lion, label: "Lion", selected: false, id: "flip7" },
  { img: panda, label: "Panda", selected: false, id: "flip8" },
  { img: bear, label: "Bear", selected: false, id: "flip9" },
  { img: fox, label: "Fox", selected: false, id: "flip10" },
  { img: cat, label: "Cat", selected: false, id: "flip11" },
  { img: dear, label: "Dear", selected: false, id: "flip12" },
];

export const shuffleArray = (array) => {
  const shuffled = [...array]; // Clone the array to avoid mutation
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
};
