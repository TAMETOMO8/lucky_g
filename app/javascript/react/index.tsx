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
      setMessage(response.data.message);
      setTest(response.data.test);
    })
    .catch((error) => {
      console.log('成功')
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
          {(() => {
                if(count > 0 && totalValue === 9){
                    return <button onClick={handleSubmit}>テスト: {message} おいしさ: {test}</button> ;
                }
            })()}
        </div>
  );
}
