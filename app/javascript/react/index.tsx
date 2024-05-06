import * as React from 'react'
import { useState } from "react";

export default function TopPages() {

  const [ count, setCount ] = useState(1);
  const [ selected, setSelected ] = useState(0);
  const [ totalValue, setTotalValue ] = useState(0);

  const changeValue = (event) => setSelected(event.target.value);

  function changeText () {
    setCount((count) => count + 1);
    setTotalValue((totalValue) => totalValue + parseInt(selected))
    if(count === 4) {
      window.location = urls;
    }
  }

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

  function buttonText(count) {
    if (count < 3) {
      return '次の質問へ';
    } else if (count === 3) {
      return 'これで決定';
    } else if (count === 4 && totalValue > 0) {
      return '見る';
    } else if (count === 4) {
      return 'ラッキーアイテムを見る';
    } 
  }
  const button = buttonText(count);

  function questionText(count) {
    if (count === 1) {
      return 'あなたが好きなものは？';
    } else if (count === 2) {
      return '大事な予定に遅刻しそう！どうする？';
    } else if (count === 3) {
      return '今食べたいものは何？';
    } else if (count >= 4 && totalValue === 0 ) {
      return '何も選ばなかったあなたにはマイナスがお似合いでしょう';
    }else if (count === 4 && totalValue > 0) {
      return '今回のラッキーアイテムは・・・これです！';
    } 
  }
  const question = questionText(count);

  function messageFirst(count) {
    if (count === 1) {
      return 'なんか大きいもの';
    } else if (count === 2) {
      return '運動も兼ねて走る';
    } else if (count === 3) {
      return '野菜';
    } else if (count === 4 && totalValue > 0) {
      return 'おや？出てくるアイテムの様子が・・・？';
    }
  }
  const textFirst = messageFirst(count);

  function messageSecond(count) {
    if (count === 1) {
      return '可愛いもの';
    } else if (count === 2) {
      return '慌てず冷静に歩いていく';
    } else if (count === 3) {
      return 'ケーキ';
    } else if (count === 4 && totalValue > 0) {
      return '実は選んだ要素関係なくない?と言ってはいけない';
    }
  }
  const textSecond = messageSecond(count);

  function messageThird(count) {
    if (count === 1) {
      return '黒くてかっこいいもの';
    } else if (count === 2) {
      return '諦める';
    } else if (count === 3) {
      return '肉';
    } else if (count >= 4 && totalValue > 0) {
      return '何も選ばずにボタンを押し続けると・・・';
    }
  }
  const textThird = messageThird(count);

  function url(count) {
    if (count === 4 && totalValue === 0) {
      return 'https://godzilla-movie2023.toho.co.jp/';
    } else if (count === 4 && totalValue === 3) {
      return 'https://www.amazon.co.jp/%E3%82%B7%E3%83%A5%E3%83%A9%E3%82%A4%E3%83%92-%E3%83%AF%E3%82%A4%E3%83%AB%E3%83%89%E3%83%A9%E3%82%A4%E3%83%95-%E3%82%B4%E3%83%AA%E3%83%A9-%E3%83%95%E3%82%A3%E3%82%AE%E3%83%A5%E3%82%A2-14770/dp/B01M3NBACG/ref=sr_1_2?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3ES2ORQ0RX0U0&dib=eyJ2IjoiMSJ9.1_1glF2OiI7irbxTaoTqFuRxKmplusY3sZytjdGemkY65GkjB-RqmYcSq6257ts8IhIm11NTH7XO2wveM22pQPpSFshgSlnQ_GoxszxTUcTBhV6TuO6MNEQLEZcUpCH_nq9jKOippSUeDq7MjadZ3mpY31FnnRfQctijFCVk1XsTodYhJPaGyGL3dsSaXG0ci5iFdZA3e3gE7DfKEQ2iGcvVAm6boZ7kX9TAAYOz4-a6yW_WQoXfGtan09-KgCoEY-N0LFeda_vM_l9GvgezKO7H-45PXU3KptKS0etEmIE.8O1nE84t4jLatGrPRDU_1laCJpNdvJKFzdeyYvlaA1E&dib_tag=se&keywords=%E3%82%B4%E3%83%AA%E3%83%A9&qid=1714979344&sprefix=%E3%82%B4%E3%83%AA%E3%83%A9%2Caps%2C169&sr=8-2';
    } else if (count === 4 && totalValue === 4) {
      return 'https://www.amazon.co.jp/%E3%83%8E%E3%83%BC%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%93%81-%E7%9C%9F%E8%AA%A0-%E5%88%A9%E4%B9%85%E8%83%A1%E9%BA%BB%E3%82%8F%E3%81%95%E3%81%B3%E3%81%94%E3%81%BE-50g-2%E5%80%8B%E3%82%BB%E3%83%83%E3%83%88/dp/B0CW1MLNBV/ref=sr_1_3_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1V6H55X4XQI7M&dib=eyJ2IjoiMSJ9.juc-mwYoT4DLqhaPhxy_-GzfXfUb4EShE6p8E2xSRFnwHmJx4u7A7rqF8wpiagWXr5Qm4QcQufdplpqBwyZCY1LQF6cbpW9oz3VDYNcN8Cp9afWlIiQYjqqQ4-OUzG4mBl69mB6qazVKi_3JqcRAiq6G5VNR2UoqH6UT2SCLV4qVSzrQlpQSF-e2VH_6M2eF_umfleK_G6dHO25hMmB04gHeQrikjauVjNTgNNeDan7AAx2sRGBJMbSncIRuIp2--hPP2ComlQOSebDsjo7WiLWmQEGNXBiNdyb7Zemcn8s.emBbZ6ZLjnjOZ1p_EPbW0_Q_lT_skw0njUwjyMlXlfs&dib_tag=se&keywords=%E3%82%B4%E3%83%9E&qid=1714979575&sprefix=%E3%82%B4%E3%83%9E%2Caps%2C163&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1';
    } else if (count === 4 && totalValue === 5) {
      return 'https://www.amazon.co.jp/BETEAM-%E5%91%AA%E8%A1%93%E5%BB%BB%E6%88%A6-3%E7%82%B9%E3%82%BB%E3%83%83%E3%83%88-%E3%83%8F%E3%83%AD%E3%82%A6%E3%82%A3%E3%83%B3%E4%BB%AE%E8%A3%85-%E3%82%B3%E3%82%B9%E3%83%81%E3%83%A5%E3%83%BC%E3%83%A0XXL/dp/B0CQRBBRD1/ref=sr_1_3_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=8BSD6MHLTZID&dib=eyJ2IjoiMSJ9.sE0DAhkoHTS5F8YeCC7grUBVGNhK25PG3ybAKfkME6Ah9LwFMciFyt1I-gkvRb3WuKXOxZ134jdQ8zJRHD9XCo_s5DLMfkH-ZQRk0_M0ef1OBOtrKYjcpBI0eUgVMyWJ8J-YMn9N7cqpllqmgC0uiBSGWNLmEe4ctGiVNGL0jt6prszmAKT2aPyP8sqDq8k2fzW8iaMYWxuMPexj1N5VvKlDpsLrPZ2ZF-RCmCtrmuStS9AMSjwHvKv0oLiIsehJ4QrSgaSMDJn1HLSwlli3Hop1Dvy1es2YIeSdEaFD4zA.5QFUDv9YEg1mxVweDQK5hZ4-aBfCF4bT8Rzy7Mwclro&dib_tag=se&keywords=%E4%BA%94%E6%9D%A1%E6%82%9F&qid=1714979634&sprefix=%E4%BA%94%E6%9D%A1%E6%82%9F%2Caps%2C165&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1';
    } else if (count === 4 && totalValue === 6) {
      return 'https://www.amazon.co.jp/%E3%82%B4%E3%83%AB%E3%82%B413%EF%BC%88%EF%BC%92%EF%BC%91%EF%BC%92%EF%BC%89-%E3%83%93%E3%83%83%E3%82%B0%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9-%E3%81%95%E3%81%84%E3%81%A8%E3%81%86%E3%83%BB%E3%81%9F%E3%81%8B%E3%82%92-ebook/dp/B0CZDL23YD/ref=sr_1_2?crid=UV3LJOQLKD2B&dib=eyJ2IjoiMSJ9.ITnXSCa9w-j09ffhgnaIe0mzJYF9gH3-9h1m3gDicZfz7iAZwhAuJYNC0CGR19guP_ZxSPkhZYbJOmLKpx_pBF7Wwf-wl1D5o_jjSF9XZOQ5lBTv4ajkD5cJKuzhcbFyhS5GRv4URFqHXuYD3fMohDqhUY4uv1KMW1NvyehJD7y0TIhx9doOqGlPn6QoPIXwecaStmhpTnxdik7MMMNXBIbhP4GvIzMprUZdfJfuTy2GB1CrmuyuHJYJxE76v9-MojrmYqrvxmnvDAu63lyIcwtYl283EqVoOKNr5JUwLDg.F4xR0GJXFr4C5HnyYLojm8hTFwjZuW6RXXnVYAE8DVw&dib_tag=se&keywords=%E3%82%B4%E3%83%AB%E3%82%B413&qid=1714979930&sprefix=%E3%82%B4%E3%83%AB%E3%82%B4%2Caps%2C163&sr=8-2';
    } else if (count === 4 && totalValue === 7) {
      return 'https://www.amazon.co.jp/Git%E3%81%8C%E3%80%81%E3%81%8A%E3%82%82%E3%81%97%E3%82%8D%E3%81%84%E3%81%BB%E3%81%A9%E3%82%8F%E3%81%8B%E3%82%8B%E5%9F%BA%E6%9C%AC%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B933-%E5%A4%A7%E4%B8%B2-%E8%82%87-ebook/dp/B00Y2FKN9C?tag=maftracking264432-22&linkCode=ure&creative=6339';
    } else if (count === 4 && totalValue === 8) {
      return 'https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-GREEN-DA%E3%83%BBKA%E3%83%BBRA-%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%80%E3%82%AB%E3%83%A9-600ml%C3%9724%E6%9C%AC/dp/B07QMZBQ6L/ref=sr_1_5?crid=1HWNZJMQVKSZ5&dib=eyJ2IjoiMSJ9.6u8AQeF7wYSfd8Mw6JTQtyzPFbLscEqxhcLk7ves6aT0boKKw7ncyF3Abhp7PZA1TZvRKJ6YRvyelJxRj_vl1x4LTHdcM2xSQlbC2CAB4L1tjlTlMyLrnpuk-9HSZUTj7LH8kh4Lm_hWMCvc601nEwS4ZyyMFBNXjnvy-tIJn-Rm-BK6HyccorcD01IDQ1I847Zfpku-PzK9wfuJc4fOY83xvqXwH2WK-jC4mbTqBhf0ARIe-wil2VMgL-gTOnMwWXi701yxorgV9MuQbMxWkJeOw5k4g0Qmq18ozdmOulI.LFWmlDuRS9TlMWA039iDHfHhZC2VkKONL1FZOzSfwSA&dib_tag=se&keywords=green+dakara&qid=1714980160&rdc=1&sprefix=green%2Caps%2C180&sr=8-5';
    } else if (count === 4 && totalValue === 9) {
      return 'https://www.amazon.co.jp/%E3%83%AF%E3%83%B3%E3%83%94%E3%83%BC%E3%82%B9-%E3%82%B4%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%B0%E3%83%A1%E3%83%AA%E3%83%BC%E5%8F%B7-animation-PIECE-%E8%89%B2%E5%88%86%E3%81%91%E6%B8%88%E3%81%BF%E3%83%97%E3%83%A9%E3%83%A2%E3%83%87%E3%83%AB/dp/B0B5TQXB8R/ref=sr_1_5?crid=2ML7T0PLYEKD2&dib=eyJ2IjoiMSJ9.dVITc8TD1fVGGlcQOjyOlEFbYjGDNbxwp2uV08DvwsUE5kBSN1LpcttFcG4PFxilnun1dcV08JQ1WmbKkOesP7eXXdXeibvjJP5NEhbYymQPEf8Nefpk3vbFOBG9FhduqqM4-jZO_aDEJNaDhuu0t8FRQ1xBEZoUrje7-9JTIgUVOXYe23QAFyfKcPwrex3yBV5HnqA3gOLuvN6UdoMnkurq-zb1pfx9CD1D1EGjQBjGA0hLv-QDv01m8JcKBPMz3HoP23BjqCsYSCNNk4kUKsroSlLjq10OY4b6NQmqh8I.cLr8eGJMdXpxC4TMWKcGJUec3dbKvynd9pC5mxHubE4&dib_tag=se&keywords=%E3%82%B4%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%B0%E3%83%A1%E3%83%AA%E3%83%BC%E5%8F%B7&qid=1714980755&sprefix=%E3%82%B4%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%B0%2Caps%2C171&sr=8-5&th=1';
    }
  }
  const urls = url(count);

  return (
        <div className="card-body text-center" id="question-body">
          <h5 className="card-title justify-center text-2xl font-bold text-gray-900 dark:text-white" value={count}>
            {countText}
          </h5>
          <p className="justify-center text-xl my-4">{question}</p>
          <label>
            <input type="radio" name="check" className="radio-button" value="1" onClick={changeValue} />
            {textFirst}
          </label>
          <label>
            <input type="radio" name="check" className="radio-button" value="2" onClick={changeValue} />
            {textSecond}
          </label>
          <label>
            <input type="radio" name="check" className="radio-button" value="3" onClick={changeValue} />
            {textThird}
          </label>
          <button onClick={changeText} className="btn btn-sm btn-active btn-accent my-3" value={totalValue} id="question_button">
            {button}
          </button>
        </div>
  );
}
