import React from "react";

type Props = {
  count: number
  radioValue: number
  totalValue: number
}

export default function RadioButton({count, radioValue, changeValue, totalValue} : Props) {

  function radioTexts(count) {
    if (count === 1 && radioValue === 1) {
      return 'なんか大きいもの';
    } else if (count === 2 && radioValue === 1) {
      return '運動も兼ねて走る';
    } else if (count === 3 && radioValue === 1) {
      return '野菜';
    } else if (count === 4 && radioValue === 1 && totalValue > 0) {
      return '検索の都合上、変なアイテムも出てきますが気にせず!';
    } 
    else if (count === 1 && radioValue === 2) {
      return '可愛いもの';
    } else if (count === 2 && radioValue === 2) {
      return '慌てず冷静に歩いていく';
    } else if (count === 3 && radioValue === 2) {
      return 'ケーキ';
    } else if (count === 4 && radioValue === 2 && totalValue > 0) {
      return '実は選んだ要素関係なくない?と言ってはいけない';
    } 
    else if (count === 1 && radioValue === 3) {
      return '黒くてかっこいいもの';
    } else if (count === 2 && radioValue === 3) {
      return '諦める';
    } else if (count === 3 && radioValue === 3) {
      return '肉';
    } else if (count === 4 && radioValue === 3 && totalValue > 0) {
      return '気に入らないときはもう一度押してみましょう・・・';
    }
  }
  const radioText = radioTexts(count);

  return (
    <label>
      <input type="radio" name="check" className="radio-button" value={radioValue} onClick={changeValue} />
      {radioText}
    </label>
  )
}