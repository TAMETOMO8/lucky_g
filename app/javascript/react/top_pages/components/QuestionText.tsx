import React from 'react';

type Props = {
  count: number
  totalValue: number
}

export default function QuestionText({count, totalValue} : Props) {

  function questionText(count) {
    if (count === 1) {
      return 'あなたが好きなものは？';
    } else if (count === 2) {
      return '大事な予定に遅刻しそう！どうする？';
    } else if (count === 3) {
      return '今食べたいものは何？';
    } else if (count === 4 && totalValue > 0) {
      return '今回のラッキーアイテムは・・・これです！';
    } 
  }
  const question = questionText(count);

  return (
    <p className="justify-center text-xl my-4">
      {question}
    </p>
  );
}