import * as React from 'react'
import { useState } from "react";
import axios from 'axios';
import { FaSquareXTwitter } from "react-icons/fa6";
import RadioButton from "./top_pages/components/RadioButton";
import QuestionButton from "./top_pages/components/QuestionButton";
import QuestionText from "./top_pages/components/QuestionText";
import QuestionCount from "./top_pages/components/QuestionCount";
import { motion } from "framer-motion"

export default function TopPages() {

  const [ count, setCount ] = useState<number>(1);
  const [ selected, setSelected ] = useState<number>(0);
  const [ totalValue, setTotalValue ] = useState<number>(0);
  const [ disabled, setDisabled ] = useState<boolean>(true);
  const [ results, setResults ] = useState([]);
  const [ fetchResults, setFetchResults ] = useState(null);
  const [ fortuneText, setFortuneText ] = useState<string>(null);

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
    setFortuneText('今日の運勢はなにかな〜？');
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
    setFetchResults(null);
    setFortuneText(null);
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
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}>
          <div>
            <p className="text-lg text-amber-600 my-3">{fortuneText}</p>
            <p>{fetchResults.params.itemName}</p>
            <img className="mx-auto" src={fetchResults.params.mediumImageUrls[0]} alt="商品画像" />
            <QuestionButton count={100} totalValue={totalValue} selected={selected} clickEvent={resetCount}/>
            <div className="grid grid-cols-11">
              <a href={"https://twitter.com/share?url=https://lucky-g.onrender.com&text=" + fortuneText} className="col-start-6" target='_blank' rel='noopener' >
                <FaSquareXTwitter size="3rem"/>
              </a>
            </div>
          </div>
        </motion.div>
        )
      }
    </div>
  );
}
