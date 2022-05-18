const request = require('request');
const args = process.argv;
const API_ENDPOINT = 'https://restcountries.com/v2/name/';

let name = args[2]


//老師新增，如果沒有輸入國家名稱就請他輸入
if(!name) {
    return console.log('請輸入國家名稱')
}

request(`${API_ENDPOINT}${name}`,
(error, response, body) => {
    if(error) {
        return console.log('抓取失敗:',error)
    }
    let data
    try {
       data = JSON.parse(body); //預期JSON字串轉成物件是成功
    } catch (error) { //如果沒有成功就返回
       return
    }

    if(data.status === 404) {
        return console.log('找不到國家資料')
    }

    /*
    注意方括框有一個陣列包住物件，
    在一些範例中有些是沒有方括號的
    所以要用陣列位置表示，
    萬一搜尋的陣列不只一筆data所以要用for迴圈跑
    */
   for(let i = 0; i<data.length; i++) {
    console.log('================')
    console.log(`
    '國家': ${data[i].name}
    '首都': ${data[i].capital}
    '貨幣'：${data[i].currencies[0].code}
    '國碼': ${data[i].callingCodes[0]}
    `);
    }
    console.log('================')
})

/*
v2版本的currencies 是一個陣列obj，
也就是currencies[0].code，位於陣列0的位置上的code
"currencies": [{
		"code": "COP",
		"name": "Colombian peso",
		"symbol": "$"
	}],

callingCodes也是一個陣列，所以我們要取他陣列0的數

*/

