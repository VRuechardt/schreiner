const Router = require('koa-router')
const router = new Router({
	prefix: '/example'
})

let obj = [
	{
		title: '',
		isbn: '12367:234128',
		description: 'Tolles Buch'
	}
]
let arr = []
arr.map(elem => {
	return 2
})

const handle = (ctx) => {
	ctx.body = obj
}

router.get('/', handle)

module.exports = router.routes()