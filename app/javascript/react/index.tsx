import React from "react";
import CheckBox from "./top_pages/components/CheckBox";


export default function TopPages() {

  return (
    <div className="flex flex-col text-left">
      <CheckBox select_text="サンプル1" />
      <CheckBox select_text="サンプル2" />
    </div>
  );
}
