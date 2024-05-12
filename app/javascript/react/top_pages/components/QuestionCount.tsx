import React from 'react';

type Props = {
  count: number
}


export default function QuestionCount({count} : Props) {
  function questionCount(count) {
    if (count === 1) {
      return '1つ目の質問です!';
    } else if (count === 2) {
      return '2つ目の質問です!';
    } else if (count === 3) {
      return '3つ目の質問です!';
    } else if (count >= 4) {
      return '';
    }
  }
  const countText = questionCount(count);

  return (
    <h5 className="card-title justify-center text-2xl font-bold text-gray-900 dark:text-white" value={count}>
      {countText}
    </h5>
  );
}
