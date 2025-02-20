import classes from "./Flip.module.css";
import egg from "../assets/images/egg1.png";
import { useState } from "react";
const Flip = ({ img }) => {
  const [flipState, setFlipState] = useState(false);

  const flipHandler = () => {
    setFlipState((prev) => !prev);
  };
  return (
    <div
      className={`${classes.flipContaniner} ${
        !flipState ? classes.flipped : ""
      }`}
      onClick={flipHandler}
    >
      <div
        className={`${classes.frontFlip} ${flipState ? classes.flipped : ""}`}
      >
        <img src={egg}></img>
      </div>

      <div
        className={`${classes.backFlip} ${!flipState ? classes.flipped : ""}`}
      >
        <img src={img}></img>
      </div>
    </div>
  );
};
export default Flip;
