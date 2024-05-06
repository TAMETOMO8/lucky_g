import * as React from 'react'
import { useState } from "react";

export default function TopPages() {

  const [ radioFirst, setRadioFirst ] = useState(1);
  const [ radioSecond, setRadioSecond ] = useState(2);
  const [ radioThird, setRadioThird ] = useState(3);
  const [ count, setCount ] = useState(1);
  const [ selected, setSelected ] = useState(0);
  const [ totalValue, setTotalValue ] = useState(0);

  const changeValue = (event) => setSelected(event.target.value);

  function changeText () {
    setCount((count) => count + 1);
    setTotalValue((totalValue) => totalValue + parseInt(selected))
  }

  function buttonText(count) {
    if (count < 3) {
      return '次の質問へ';
    } else if (count === 3) {
      return 'これで決定';
    }
  }
  const button = buttonText(count);

  function questionText(count) {
    if (count === 1) {
      return 'あなたが好きなものは？';
    } else if (count === 2) {
      return '大事な予定に遅刻しそう！どうする？';
    } else if (count === 3) {
      return '今食べたいものを選ぶとしたら？';
    } else if (count < 10) {
      return '質問は以上です！';
    }
  }
  const question = questionText(count);

  function messageFirst(count) {
    if (count === 1) {
      return '黒くて大きいもの';
    } else if (count === 2) {
      return '運動も兼ねて走る';
    } else if (count === 3) {
      return '霞';
    } else if (count === 10) {
      return 'X';
    }
  }
  const textFirst = messageFirst(count);

  function messageSecond(count) {
    if (count === 1) {
      return '可愛いもの';
    } else if (count === 2) {
      return '慌てず冷静に向かう';
    } else if (count === 3) {
      return 'ケーキ';
    } else if (count >= 4) {
      return '';
    }
  }
  const textSecond = messageSecond(count);

  function messageThird(count) {
    if (count === 1) {
      return 'かっこいいもの';
    } else if (count === 2) {
      return 'なんとか空を飛べないものかと祈る';
    } else if (count === 3) {
      return '肉';
    } else if (count >= 4) {
      return '';
    }
  }
  const textThird = messageThird(count);

  return (
      <div className="card card-compact lg:w-1/3 md:w-1/2 shadow-xl mx-auto bg-base-200">
        <div className="card-body">
          <h5 className="card-title justify-center text-2xl font-bold text-gray-900 dark:text-white" value={count}>{count}つ目の質問！</h5>
          <p className="justify-center text-xl my-4">{question}</p>
          <label>
            <input type="radio" name="check" className="radio-button" value={radioFirst} onClick={changeValue} />
            {textFirst}
          </label>
          <label>
            <input type="radio" name="check" className="radio-button" value={radioSecond} onClick={changeValue} />
            {textSecond}
          </label>
          <label>
            <input type="radio" name="check" className="radio-button" value={radioThird} onClick={changeValue} />
            {textThird}
          </label>
          <button onClick={changeText} className="btn btn-sm btn-active btn-accent my-3" value={totalValue} id="question_button">
            {button}
          </button>
        </div>
      </div>
  );
}
