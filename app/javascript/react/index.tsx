import * as React from 'react'
import { useState } from "react";
import { useReducer } from 'react';


export default function TopPages() {

  const [ radioFirst, setRadioFirst ] = useState(1);
  const [ textSecond, setTextSecond ] = useState('嫌い');
  const [ radioSecond, setRadioSecond ] = useState(2);
  const [ textThird, setTextThird ] = useState('どちらとも言えない');
  const [ radioThird, setRadioThird ] = useState(3);

  const [ count, setCount ] = useState(1);
  const [ button, setButton ] = useState('次の質問へ')

  const [selected, setSelected] = useState(0);

  const questionButton = document.querySelector('#question_button');
  const radioButton = document.querySelector('.radio-button');

  const changeValue = (event) => setSelected(event.target.value);

  function changeText () {
    setCount((count) => count + 1);
  }

  function textMessage(count) {
    if (count === 1) {
      return 'サンプル1-1';
    } else if (count === 2) {
      return 'サンプル1-2';
    } else if (count === 3) {
      return 'サンプル1-3';
    }
  }
  const textFirst = textMessage(count);

  return (
      <div className="card card-compact lg:w-1/3 md:w-1/2 shadow-xl mx-auto bg-base-200">
        <div className="card-body">
          <h5 className="card-title justify-center text-2xl font-bold text-gray-900 dark:text-white">{count}つ目の質問です</h5>
          <label>
            <input type="radio" name="check" className="radio-button" value={radioFirst} onClick={changeValue} />
            {textFirst}
          </label>
          <label>
            <input type="radio" name="check" className="radio-button" value={radioSecond} onClick={changeValue}/>
            {textSecond}
          </label>
          <label>
            <input type="radio" name="check" className="radio-button" value={radioThird} onClick={changeValue}/>
            {textThird}
          </label>
          <button onClick={changeText} className="btn btn-sm btn-active btn-accent my-3" value={selected} id="question_button">
            クリック
          </button>
        </div>
      </div>
  );
}
