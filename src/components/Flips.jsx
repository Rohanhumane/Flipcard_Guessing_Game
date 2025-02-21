import classes from "./Flip.module.css";
import egg from "../assets/images/egg.png";
import { useState } from "react";

const Flip = (props) => {
  // eslint-disable-next-line react/prop-types
  const { img: flipImg, name, onChange, id } = props;

  const [flipState, setFlipState] = useState(false);

  const flipHandler = () => {
    setFlipState((prev) => !prev);
    onChange(id);
  };

  return (
    <div
      className={`${classes.flipContaniner} ${
        flipState ? classes.flipped : ""
      }`}
      onClick={flipHandler}
      key={id}
    >
      <div className={classes.frontFlip}>
        <img src={egg} alt={name} />
      </div>

      <div className={classes.backFlip}>
        <img src={flipImg} alt={name} />
        <div className={classes.name}>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Flip;
