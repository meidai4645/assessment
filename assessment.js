(function(){
  'use strict';
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');
    　 /**
     * 指定した要素の子供を全て削除する
     * @param {HTMLElement} element HTMLの要素
     */
    function removeAllChildren(element) {
        while (element.firstChild) {//子供の要素がある限り削除
            element.removeChild(element.firstChild);
        }
    }
   assessmentButton.onclick = ()=>　{
    const userName = userNameInput.value;
    if (userName.length === 0) {//名前が空のときは終了する ガード句
        return;
    }
    removeAllChildren(resultDivided);
    removeAllChildren( tweetDivided);
       //診断結果表示エリアの作成
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
   };

  const answers = [
    '{userName}の運勢は大吉です{userName}のラッキーアイテムは椅子です',
    '{userName}の運勢は中吉です{userName}のラッキーアイテムは槍です',
    '{userName}の運勢は小吉です{userName}のラッキーアイテムは烏賊です',
    '{userName}の運勢は吉です{userName}のラッキーアイテムはメロンです',
    '{userName}の運勢は凶です{userName}のラッキーアイテムは本です',
    '{userName}の運勢は大凶です{userName}のラッキーアイテムはリンゴです',
    '｛userName｝にやさしさがにじみでてる'
];
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
  function assessment(userName){
       //全文字のコード番号を取得してそれを足し合わせる
      let sumOfcharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
    }
  　　
    //文字のコード番号を合計を回答の数で割って添字の数値を求める
    const index = sumOfcharCode % answers.length;
    let result = answers[index];
    result = result.replace(/\{userName\}/g, userName);

    return result;
    }
   //console.log(assessment('太郎'));


})();
