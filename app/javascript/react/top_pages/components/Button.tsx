import React from "react";

type Props = {
  button_title: string
}

export default function Button({button_title}: Props) {

  return (
    <div className="btn btn-sm btn-active btn-accent my-3">
      {button_title}
    </div>
  )

}