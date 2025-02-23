import classes from "./Flip.module.css";
import egg from "../assets/images/egg.png";

const Flip = (props) => {
  // eslint-disable-next-line react/prop-types
  const { img: flipImg, name, onChange, id, isFlip, cursor } = props;

  const flipHandler = () => {
    onChange(id, name);
  };

  return (
    <div
      className={`${classes.flipContaniner} ${isFlip ? classes.flipped : ""}`}
      style={{ cursor: cursor ? "pointer" : "default" }}
      onClick={cursor ? flipHandler : undefined}
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
