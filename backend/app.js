
const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const routes = require('./routes')
const app = new Koa()

app.use(bodyparser())
app.use(routes)

app.use(require('koa-static')('../dest'))

app.listen(80, () => console.log('listening on port 80'))

let books = require('./models/books')
