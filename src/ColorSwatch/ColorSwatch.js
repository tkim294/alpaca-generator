import React from "react";
import { useDispatch } from "react-redux";
import { detailsActions } from "../store/details-slice";

import classes from "./ColorSwatch.module.css";

const Button = ({ name, value, selectedDetails }) => {
const detailsValues = selectedDetails.map(details => details.value);
const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(detailsActions.onChangeDetail({
        name: name,
        value: value
    }));
  };

  return (
    <button
      className={`${classes.button} ${classes.buttonMargin} ${detailsValues.includes(value) && classes.clicked}`}
      onClick={clickHandler}
    >
      <img
        className={classes.colorSwatch}
        alt='backgrounds'
        src={require(`../assets/alpaca/backgrounds/${value}.png`)}
      />
    </button>
  );
};

export default Button;
