import React from 'react';

import classes from './Button.module.css';
import { useDispatch } from "react-redux";
import { alpacaActions } from '../store/alpaca-slice';

const Button = ({ accessory, index, setSelectedStyle, selectedStyle }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    setSelectedStyle(accessory);
    dispatch(alpacaActions.onChangeStyle(accessory));
  }

  return (
    <button id='styleButton' className={`${classes.button} ${classes.buttonMargin} ${selectedStyle.name === accessory.name && classes.clicked}`} onClick={clickHandler}>
        {accessory.name}
    </button>
  )
}

export default Button