const request = require('request');
const args = process.argv //意思是把你指令的每一個用空白切開變成陣列
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

const action = args[2];
const alpha = args[3];

//如果用if也可以，但條件會比較不整齊，這行寫出函式
switch(action) {
    case 'list' :
        listBooks();
        break;
    case 'read' :
        readBook(alpha);
        break;
    case 'delete' :
        deleteBook(alpha);
        break;
    case 'create' :
        createBook(alpha);
        break;
    case 'update':
        updateBook(alpha, args[4]);
        break;
    default:
        console.log('Available commands: list, read, delete, create and update');
}

//以下開始寫個函式

function listBooks() {
    request(`${API_ENDPOINT}/books?_limit=20`,(error, response, body) => {
        //如果抓取失敗就return印抓取失敗error 
        if (error) {
            return console.log('抓取失敗', error);
        }
        let data
        try{
            data = JSON.parse(body);// JSON格式的字串
        }catch(e) {
            console.log(e)// 錯誤處理
        } 
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].id} ${data[i].name}`)
        }
    })
}

function readBook(alpha_id) {
    request(`${API_ENDPOINT}/books/${alpha_id}`,(error, response, body) => { 
        if (error) {
            return console.log('抓取失敗', error);
        }
        //現在已經抓到這本書，要把他轉成object
        const data = JSON.parse(body); // JSON格式的字串
        console.log(`${data.id} ${data.name}`)
    })
}

function deleteBook(alpha_delete) {
    request.delete(`${API_ENDPOINT}/books/${alpha_delete}`,(error, response, body) => { 
        if (error) {
            return console.log('刪除失敗', error);
        }
        console.log('刪除成功')
    })
}

function createBook(alpha_POST) {
    request.post({
    url: `${API_ENDPOINT}/books`,
    form : {
    'name':alpha_POST //沒打'name':預設會是參數名稱alpha_POST
    }},
    (error, response, body) => { 
        if (error) {
            return console.log('新增失敗', error);
        }
        console.log('新增成功');
    })
}

function updateBook(alpha_update, newname) {
    request.patch({
    url: `${API_ENDPOINT}/books/${alpha_update}`,
    form : {
    'name': newname
    }},
    (error, response, body) => { 
        if (error) {
            return console.log('更新失敗', error);
        }
        console.log('更新成功');
    })
}