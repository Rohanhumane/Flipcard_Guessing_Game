# Guessing Game 🎮

A fun and interactive card-flipping guessing game built with **React**! The goal is to match pairs by flipping cards and testing your memory.

## 🚀 Features

- 🃏 **Card Flipping**: Interactive 3D flip animation for cards.
- 🔀 **Shuffling**: Randomize the cards to make each game unique.
- 🏆 **Win Modal**: Get congratulated with a modal upon winning.
- 🎨 **Responsive UI**: Clean and intuitive interface.
- 🔁 **Restart Option**: Easily restart the game after completion.

## 📂 Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── allImages.png
│   ├── components/
│   │   ├── Flips.jsx
│   │   ├── Modal.jsx
│   │   ├── Flip.module.css
│   │   └── Modal.module.css
│   ├── helper/
│   │   └── flipObj.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
└── package.json
```

## 🛠️ Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/guessing-game.git
   cd guessing-game
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. **Open the App:**
   Visit `http://localhost:5173` in your browser.

## 🎮 How to Play

1. **Objective:**
   Flip the cards and find matching pairs.

2. **Game Flow:**
   - Click on cards to flip them.
   - Find matching pairs to keep them flipped.
   - Once all pairs are found, a modal congratulates you.

3. **Controls:**
   - **Shuffle** button to randomize the cards.
   - **Restart** button in the modal after winning.

## 💡 Tech Stack

- **React** – Frontend Framework
- **CSS Modules** – Scoped component styling
- **JavaScript** – Core game logic

## 📋 Code Overview

- **App.jsx:** Main component handling game logic, state, and rendering.
- **Flips.jsx:** Card flip component managing individual flip animations.
- **Modal.jsx:** Displays a modal when the user wins.
- **flipObj.js:** Contains initial card data and shuffle utility.

## 📸 Screenshots

*(Add screenshots of the game UI here)*

## 🧑‍💻 Author

- **Rohan Humane** – [GitHub](https://github.com/Rohanhumane/Flipcard_Guessing_Game)

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

🎉 **Enjoy playing the Guessing Game!** 🎉

