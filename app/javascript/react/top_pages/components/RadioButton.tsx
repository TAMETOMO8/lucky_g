import React from "react";

type Props = {
  select_text: string
  radio_id: string
  radio_value: number
}

export default function RadioButton({select_text, radio_id, radio_value}: Props) {

  return (
    <label>
      <input type="radio" name="check" value={radio_value} id={radio_id}/>
      {select_text}
    </label>
  )

}