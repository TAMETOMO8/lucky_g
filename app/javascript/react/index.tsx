import * as React from 'react'
import { useState } from "react";
import axios from 'axios';
import RadioButton from "./top_pages/components/RadioButton";
import QuestionButton from "./top_pages/components/QuestionButton";
import QuestionText from "./top_pages/components/QuestionText";
import QuestionCount from "./top_pages/components/QuestionCount";

export default function TopPages() {

  const [ count, setCount ] = useState(1);
  const [ selected, setSelected ] = useState(0);
  const [ totalValue, setTotalValue ] = useState(0);
  const [ disabled, setDisabled ] = useState(true);
  const [ results, setResults ] = useState([]);
  const [ fetchResults, setFetchResults ] = useState(null);
  const [ fortuneText, setFortuneText ] = useState('');

  function changeValue (event) {
    setSelected(event.target.value);
    setDisabled(false);
  }

  function clickEvent () {
    setCount((count) => count + 1);
    setTotalValue((totalValue) => totalValue + parseInt(selected));
  }

  const handleSubmit = () => {
    const railsValue = totalValue
    axios.post(`/search`, { value: `${railsValue}` })
    .then((response) => {
      if (response.data) {
        setFortuneText(response.data.fortune_text);
        setResults(response.data.results);
        const resultsIndex = Math.floor(Math.random() * response.data.results.length);
        setFetchResults(response.data.results[resultsIndex]);
        console.log('取得成功');
      }else {
        console.log('データは空です');
      }
    })
    .catch((error) => {
      console.log('取得失敗');
    })
  };

  function resetCount () {
    setCount(1);
    setTotalValue(0);
    setResults([]);
    setFetchResults(null)
  }

  return (
    <div className="card-body text-center" id="question-body">
      <QuestionCount count={count} />
      <QuestionText count={count} totalValue={totalValue} />
      <RadioButton count={count} changeValue={changeValue} radioValue={1} totalValue={totalValue} />
      <RadioButton count={count} changeValue={changeValue} radioValue={2} totalValue={totalValue} />
      <RadioButton count={count} changeValue={changeValue} radioValue={3} totalValue={totalValue} />
      {(() => {
            if(count === 4){
              return <QuestionButton count={count} totalValue={totalValue} selected={selected} clickEvent={handleSubmit}/>
            } else if(count < 4) {
              return <QuestionButton count={count} totalValue={totalValue} selected={selected} clickEvent={clickEvent} disabled={disabled}/>
            }
      })()}
      {
        fetchResults && (
          <div>
            <p className="text-lg text-amber-600 my-3">{fortuneText}</p>
            <p>{fetchResults.params.itemName}</p>
            <img className="mx-auto" src={fetchResults.params.mediumImageUrls[0]} alt="商品画像" />
            <QuestionButton count={100} totalValue={totalValue} selected={selected} clickEvent={resetCount}/>
          </div>
        )
      }
    </div>
  );
}
