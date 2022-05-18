const request = require('request');
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

request(
    `${API_ENDPOINT}/books?_limit=10`,
    (error, response, body) => {
     if(error) {
        return console.log('抓取失敗', error);
     }
     let jsondata
     try {
        jsondata = JSON.parse(body); //預期JSON字串轉成物件是成功
     } catch (error) { //如果沒有成功就返回
        return
     }
     for (let i = 0; i<jsondata.length; i++) {
         console.log(`${jsondata[i].id} ${jsondata[i].name}`)
     }

     }
);

// [ 為一個物件陣列，取陣列第0個位置的物件內容
//     { 
//     id: 1, 
//     name: '克雷的橋' 
//     },
//     { id: 2, name: '當我想你時，全世界都救不了我' },
//     { id: 3, name: '我殺的人與殺我的人' },
//     { id: 4, name: '念念時光真味' },
//     { id: 5, name: '蜂蜜花火【致年少時光‧限量插畫設計書衣典藏版】' },
//     { id: 6, name: '苦雨之地' },
//     { id: 7, name: '你已走遠，我還在練習道別' },
//     { id: 8, name: '想把餘生的溫柔都給你' },
//     { id: 9, name: '你是我最熟悉的陌生人' },
//     { id: 10, name: '偷書賊（25萬本紀念版本）' }
//   ]
  