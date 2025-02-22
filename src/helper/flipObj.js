import lion from "../assets/images/lion.jpg";
import panda from "../assets/images/panda.jpg";
import cat from "../assets/images/cat.png";
import bear from "../assets/images/bear.jpg";
import fox from "../assets/images/fox.png";
import dear from "../assets/images/dear.jpg";

export const flipObj = [
  { img: lion, label: "Lion", isFlip: false, id: "flip1", cursor: true },
  { img: panda, label: "Panda", isFlip: false, id: "flip2", cursor: true },
  { img: bear, label: "Bear", isFlip: false, id: "flip3", cursor: true },
  { img: fox, label: "Fox", isFlip: false, id: "flip4", cursor: true },
  { img: cat, label: "Cat", isFlip: false, id: "flip5", cursor: true },
  { img: dear, label: "Dear", isFlip: false, id: "flip6", cursor: true },

  { img: lion, label: "Lion", isFlip: false, id: "flip7", cursor: true },
  { img: panda, label: "Panda", isFlip: false, id: "flip8", cursor: true },
  { img: bear, label: "Bear", isFlip: false, id: "flip9", cursor: true },
  { img: fox, label: "Fox", isFlip: false, id: "flip10", cursor: true },
  { img: cat, label: "Cat", isFlip: false, id: "flip11", cursor: true },
  { img: dear, label: "Dear", isFlip: false, id: "flip12", cursor: true },
];

export const shuffleArray = (array) => {
  const shuffled = [...array]; // Clone the array to avoid mutation
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
};
