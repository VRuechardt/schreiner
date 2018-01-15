const Router = require('koa-router')
const router = new Router({
	prefix: '/example'
})

router.post('/', async ctx => ctx.body = ctx.request.body.id)

module.exports = router.routes()