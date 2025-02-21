import { useCallback, useEffect, useState } from "react";
import { flipObj, shuffleArray } from "./helper/flipObj";
import "./App.css";
import Flip from "./components/Flips";

function App() {
  const [flipArray, setFlipArray] = useState(flipObj);
  const [shuffle, setShuffle] = useState(false);

  // useEffect(() => {
  //   setFlipArray((prev) => {
  //     return shuffleArray(prev);
  //   });
  // }, [shuffle]);

  const shuffleHandler = useCallback(() => {
    setShuffle((prev) => !prev);
  }, []);

  const selectHandler = (id, name) => {
    setFlipArray((prev) => {
      // Use map and return the new updated array directly
      const newState = prev.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            selected: !obj.selected, // Toggle selected state
          };
        }
        return obj; // No need to spread if no changes
      });

      let c = 0;
      const update = newState.map((obj) => {
        if (obj.name === name && obj.selected) {
          c += 1;
          return {
            ...obj,
            selected: true, // Toggle selected state
          };
        }
        return { ...obj, selected: false }; // No need to spread if no changes
      });

      console.log("Updated FlipArray:", update);
      return update;
    });
  };

  return (
    <>
      <header>
        <h1>Guessing Game</h1>
      </header>

      <main className="container">
        {flipArray.map((item, index) => (
          <Flip
            id={item.id}
            img={item.img}
            key={`${item.label}_${index}`}
            name={item.label}
            onChange={selectHandler}
          />
        ))}
      </main>

      <button onClick={shuffleHandler}>Shuffle</button>
    </>
  );
}

export default App;
