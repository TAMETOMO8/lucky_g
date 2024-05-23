import React from "react";

type Props = {
  count: number
  selected: number
  totalValue: number
  disabled: boolean
}

export default function QuestionButton({count, clickEvent, totalValue, selected, disabled} : Props) {

  function buttonTexts(count) {
    if (count < 3) {
      return '次の質問へ';
    } else if (count === 3) {
      return 'これで決定';
    } else if (count === 4 && totalValue > 0) {
      return 'ラッキーアイテムを見る';
    } else if (count === 100) {
      return '質問をやり直す';
    }
  }
  const buttonText = buttonTexts(count);

  return (
    <button onClick={clickEvent} className="btn btn-sm btn-active btn-accent my-3" value={totalValue} id="question_button" disabled={disabled}>
      {buttonText}
    </button>
  );
  
}