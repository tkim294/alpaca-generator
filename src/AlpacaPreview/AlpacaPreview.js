import React, { Fragment } from "react";

import classes from "./AlpacaPreview.module.css";
import { useSelector } from "react-redux";
import nose from '../assets/alpaca/nose.png'

const AlpacaPreview = () => {
  const detailState = useSelector((state) => state.detail);

  return (
    <Fragment>
      <div className={classes.preview}>
        {detailState.map((state) => (
          <img
            className={`${classes.image} ${state.name === "mouth" && classes.mouth} ${
              state.name === "eyes" && classes.eyes
            }
            ${state.name === "accessories" && classes.accessories}
            `}
            src={require(`../assets/alpaca/${state.name}/${state.value}.png`)}
            alt={state.name}
          />
        ))}
        <img className={`${classes.image} ${classes.nose}`} src={nose} alt='nose' />
      </div>
    </Fragment>
  );
};

export default AlpacaPreview;
