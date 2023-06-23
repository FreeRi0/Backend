const fs = require('fs')
const path = require('path')
const axios = require('axios')
const http = require('http')

(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    fs.writeFile(path.resolve(__dirname, '1.json'), JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            throw err;
        }
        console.log('Done!');
    })
}) ()

http
.createServer((request, response) => {
    response.setHeader("Content-type", "text/html; charset=utf-8;")
    if (request.url === '/users') {
        response.write('Список пользователей')
    } else if (request.url === '/posts'){
        response.write('Список постов')
    }
    response.end()
})
.listen(3000)