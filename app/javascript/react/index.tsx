import React from "react";
import RadioButton from "./top_pages/components/RadioButton";
import Button from "./top_pages/components/Button";


export default function TopPages() {

  return (
      <div className="card card-compact lg:w-1/3 md:w-1/2 shadow-xl mx-auto">
        <div className="card-body">
          <h5 className="card-title justify-center text-2xl font-bold text-gray-900 dark:text-white">あなたの気分で選んでみてください</h5>
          <div className="flex flex-col text-center bg-base-200" id="sample">
            <RadioButton select_text="サンプル1" radio_value={1} />
            <RadioButton select_text="サンプル2" radio_value={2} />
            <RadioButton select_text="サンプル3" radio_value={3} />
          </div>
          <div className="text-center">
            <Button button_title="クリック" button_id="question_button" />
          </div>
        </div>
      </div>
  );
}
