const Router = require('koa-router')

const router = new Router({
	prefix: '/api'
})

router.use(require('./example.js'))

module.exports = router.routes()