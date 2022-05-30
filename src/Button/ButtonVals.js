import React from "react";
import { useDispatch } from "react-redux";
import { detailsActions } from "../store/details-slice";

import classes from "./ButtonVals.module.css";

const Button = ({ name, value, selectedDetails }) => {
  // const detailsValues = selectedDetails.map(details => details.value);
  const dispatch = useDispatch();
  let isClicked = false;

  selectedDetails.forEach(detail => {
    if(detail.name === name && detail.value === value) {
      isClicked = true;
    }
  });
 

  const clickHandler = () => {
    dispatch(detailsActions.onChangeDetail({
      name: name,
      value: value
    }));
  };

  return (
    <button
      className={`${classes.button} ${classes.buttonMargin} ${isClicked && classes.clicked}`}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};

export default Button;
