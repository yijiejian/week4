const request = require('request');

//先設定CLIENT和URL
const CLIENT_ID = '###';
const BASE_URL = 'https://api.twitch.tv/helix';
const Author = '##';

//在request裡上面放headers，用於給twitch認證
request.get({
  method: 'GET',
  url: `${BASE_URL}/games/top`,
  headers: {
    'Client-ID': CLIENT_ID,
    // 'Accept': 'application/vnd.twitchtv.v5+json',
    'Authorization': Author,
  }
}, function(err, res, body) {

  if (err) {
    return console.log(err)
  }

  const response = JSON.parse(body)
  const games = response.data 
  //data資料裡的data陣列,也就是遊戲TOP
  
  //for...of的遞迴關係
  for(let game of games) {
    console.log(`${game.name}`)
  }

  // for(let i = 0; i < game.data.length; i++) {
  //   console.log(`${i+1} ${game.data[i].name}`)
  // }

})
