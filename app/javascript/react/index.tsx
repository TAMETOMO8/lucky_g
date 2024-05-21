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
  const [ message, setMessage ] = useState('お');
  const [ test, setTest ] = useState('どちらでもない');
  const [ disabled, setDisabled ] = useState(true);
  const [ results, setResults ] = useState([]);

  function changeValue (event) {
    setSelected(event.target.value);
    setDisabled(false)
  }

  function clickEvent () {
    setCount((count) => count + 1);
    setTotalValue((totalValue) => totalValue + parseInt(selected))
    if(count === 4) {
      window.open(urls, '_blank');
    }
  }

  const handleSubmit = () => {
    const railsValue = totalValue
    axios.post(`/search`, { value: `${railsValue}` })
    .then((response) => {
      if (response.data) {
        setResults(response.data.results);
        console.log('取得成功');
      }else {
        console.log('データは空です');
      }
    })
    .catch((error) => {
      console.log('取得失敗');
    })
  };

  return (
        <div className="card-body text-center" id="question-body">
          <QuestionCount count={count} />
          <QuestionText count={count} totalValue={totalValue} />
          <RadioButton count={count} changeValue={changeValue} radioValue={1} totalValue={totalValue} />
          <RadioButton count={count} changeValue={changeValue} radioValue={2} totalValue={totalValue} />
          <RadioButton count={count} changeValue={changeValue} radioValue={3} totalValue={totalValue} />
          <QuestionButton count={count} totalValue={totalValue} selected={selected} clickEvent={clickEvent} disabled={disabled}/>
          {
            results.map( (result, index) => {
              return(
                <div key={index} >
                  {result.params.itemName}
                  <img src={result.params.mediumImageUrls[0]}/>
                </div>
              )
            })
          }
          {(() => {
                if(count > 0 && totalValue === 9){
                    return <button onClick={handleSubmit}>テスト: {message} おいしさ: {test}</button>
                }
            })()}
        </div>
  );
}
