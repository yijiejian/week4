// 請以自己的話解釋 API 是什麼？
// 請找出三個課程沒教的 HTTP status code 並簡單介紹
// 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 
// CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，
// 你的 API 會長什麼樣子？請提供一份 API 文件。

console.log(`
請以自己的話解釋 API 是什麼？

API全名是Application Programming Interface，最重要的地方是在Interface的部分
我們稱做介面。

API最主要是為了做為溝通、傳遞資料及接收資料訊息的一個介面
例如USB就是一個傳輸介面。

API又可以分為使用API和提供API
使用API：當你想要用別人的資料和東西時，需要透過API來跟他要東西資源
提供API：需要開發介面去要給使用API的人
(因為我們不可能把全部資料庫給他，也藉此規範哪些資料可以拿，哪些資料不行)

我們最常使用的API是]WebAPI，透過網路來交換及接收資訊
`)

console.log(`
參照:https://ithelp.ithome.com.tw/articles/10212103

請找出三個課程沒教的 HTTP status code 並簡單介紹

205 Reset Content:伺服器成功處理了請求，但沒有返回任何內容。
與204回應不同，此回應要求請求者重設文件視圖

204 No Content:伺服器成功處理了請求，沒有返回任何內容
使用ajax時，當只需要知道回應成功或失敗的情况，則可以使用狀態碼HTTP 204來代替HTTP 200，減少多餘的數據傳輸。

304 Not Modified 
表示資源在由請求頭中的If-Modified-Since或If-None-Match參數指定的這一版本之後，
未曾被修改。在這種情況下，
由於客戶端仍然具有以前下載的副本，
因此不需要重新傳輸資源。

在查詢時已經做了一次數據庫的調查，避免接下來一直查詢數據庫，以增加用戶體驗，
藉由已知的暫存檔減少查詢次數。
通过 HttpWatch 查看一個請求會得到這樣的結果：
第一次訪問 200
滑鼠點及二次訪問 (產生Cache)
按F5刷新 304
按Ctrl+F5強勢刷新 200 (清Cache)
如果是這樣的就說明暫存是真正有效了

`)

console.log(`
HTTP的請求方法一些動詞指令
https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods


假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 
CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，
你的 API 會長什麼樣子？請提供一份 API 文件。

CRUD意思(新增:Create ,  讀取:Read, 更新: Update, 刪除:Delete) 
參照:https://developer.mozilla.org/zh-TW/docs/Glossary/CRUD

url:https://restaurant.chuchu/

新增餐廳 POST /store
刪除餐廳 DELETE /store/id:
更改餐廳 PATCH  /store/id:
回傳所有餐廳資料 GET /store
回傳單一餐廳資料 GET /store/id:



`)
