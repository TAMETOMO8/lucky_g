import React from "react";
import { useState } from "react";


export default function RadioButton({radioText, changeValue}) {

  return (
    <label>
      <input type="radio" name="check" className="radio-button" value="1" onClick={changeValue}/>
      {radioText}
    </label>
  )

}