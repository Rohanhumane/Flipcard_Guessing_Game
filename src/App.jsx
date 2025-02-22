import { useCallback, useEffect, useState } from "react";
import { flipObj, shuffleArray } from "./helper/flipObj";
import "./App.css";
import Flip from "./components/Flips";
import Modal from "./components/Modal";

function App() {
  const [flipArray, setFlipArray] = useState(flipObj);
  const [shuffle, setShuffle] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setFlipArray((prev) => {
      return shuffleArray(prev);
    });
  }, [shuffle]);

  const shuffleHandler = useCallback(() => {
    setShuffle((prev) => !prev);
  }, []);

  const selectHandler = async (id) => {
    // Step 1: Update flipArray synchronously first
    const updatedFlipArray = flipArray.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          isFlip: true,
          cursor: false,
        };
      }
      return { ...obj, cursor: false };
    });

    // Apply the state update
    setFlipArray(updatedFlipArray);

    // Step 2: Wait asynchronously (if needed)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // ✅ Proper await

    // Step 3: Process Flipped items
    const storeFlippedArr = updatedFlipArray.reduce((acc, obj) => {
      if (obj.isFlip) {
        acc[obj.label] = (acc[obj.label] || 0) + 1;
      }
      return acc;
    }, {});

    const duplicateLabels = Object.keys(storeFlippedArr).filter(
      (label) => storeFlippedArr[label] <= 1
    );

    // Step 4: Update state again if needed
    let finalUpdatedArray = updatedFlipArray;
    if (duplicateLabels.length >= 2) {
      finalUpdatedArray = updatedFlipArray.map((obj) => {
        if (duplicateLabels.includes(obj.label)) {
          return {
            ...obj,
            isFlip: false,
            cursor: true,
          };
        }
        return { ...obj, cursor: true };
      });
    } else {
      finalUpdatedArray = updatedFlipArray.map((obj) => {
        return {
          ...obj,
          cursor: true,
        };
      });
    }
    setFlipArray(finalUpdatedArray); // Apply the final update
  };

  useEffect(() => {
    const checkGameOver = async () => {
      const count = flipArray.reduce((acc, obj) => {
        return obj.isFlip ? acc + 1 : acc;
      }, 0);

      if (count > flipArray.length - 1) {
        console.log("rohan")
        await new Promise((resolve) => setTimeout(resolve, 1000)); // ✅ Proper await
        setGameOver(true);
      }
    };

    checkGameOver();
  }, [flipArray]);

  const closeModalHandler = useCallback(() => {
    //Reset to start
    setFlipArray((prev) =>
      prev.map((obj) => {
        return {
          ...obj,
          isFlip: false,
          cursor: true,
        };
      })
    );
    setGameOver(false);
  }, []);

  return (
    <>
      <Modal open={gameOver} onClose={closeModalHandler}>
        <div className="modal-actions">
          <h2>Game Over</h2>
          <button className="closeButton" onClick={closeModalHandler}>
            Restart
          </button>
        </div>
      </Modal>

      <header>
        <h1>Guessing Game</h1>
      </header>

      <main className="container">
        {flipArray?.map((item, index) => (
          <Flip
            id={item.id}
            img={item.img}
            key={`${item.label}_${index}`}
            name={item.label}
            isFlip={item.isFlip}
            cursor={item.cursor}
            onChange={selectHandler}
          />
        ))}
      </main>

      <button onClick={shuffleHandler}>Shuffle</button>
    </>
  );
}

export default App;
