import React from "react";
import CheckBox from "./top_pages/components/CheckBox";
import Button from "./top_pages/components/Button";


export default function TopPages() {

  return (
      <div className="card card-compact w-96 bg-base-300 shadow-xl mx-auto">
        <div className="flex flex-col text-center">
          <CheckBox select_text="サンプル1" />
          <CheckBox select_text="サンプル2" />
        </div>
        <div className="text-center">
          <Button button_title="クリック" />
        </div>
      </div>
  );
}
