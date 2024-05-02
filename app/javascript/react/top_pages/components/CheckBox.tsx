import React from "react";

type Props = {
  select_text: string
}

export default function CheckBox({select_text}: Props) {

  return (
    <label>
      <input type="radio" name="check"/>
      {select_text}
    </label>
  )

}