import React, { useState } from "react";
import Button from "../Button/Button";
import ButtonVals from "../Button/ButtonVals";
import ColorSwatch from '../ColorSwatch/ColorSwatch';

import classes from "./ButtonControls.module.css";
import {
  ACCESSORIES,
  BACKGROUNDS,
  EARS,
  EYES,
  HAIR,
  LEG,
  MOUTH,
  NECK,
} from "../constant/constant";
import { useSelector } from "react-redux";

const ButtonControls = () => {
  const [selectedStyle, setSelectedStyle] = useState(HAIR);

  const accessoriesValues = [
    HAIR,
    ACCESSORIES,
    BACKGROUNDS,
    EARS,
    EYES,
    LEG,
    MOUTH,
    NECK,
  ];

  const styleDetails = useSelector((state) => state.alpaca);
  const selectedDetails = useSelector((state) => state.detail);

  const ButtonValsComponent = ({val, name}) => {
      if(name === 'backgrounds') {
        return (
            <ColorSwatch name={name} value={val} selectedDetails={selectedDetails} />
        )
      } else {
          return (
            <ButtonVals name={name} value={val} selectedDetails={selectedDetails} />
          )
      }
  }

  return (
    <div className={classes.buttonControls}>
      <h1>ACCESSORIZE THE ALPACA'S</h1>
      {accessoriesValues.map((accessory) => (
        <Button accessory={accessory} setSelectedStyle={setSelectedStyle} selectedStyle={selectedStyle} />
      ))}
      <h1>STYLE</h1>
      {styleDetails.values.map((value) => (
          <ButtonValsComponent val={value} name={styleDetails.name} />  
      ))}
    </div>
  );
};

export default ButtonControls;
