const { readdirSync, writeFileSync, readFileSync } = require('fs')
const { resolve } = require('path')

const path = resolve(__dirname, '../articles/')
const withPath = (s) => path + '/' + s

const arr = readdirSync(path)

const list = arr
	.filter((i) => i.match(/md$/))
	.map((i) => {
		const obj = {}
		obj.path = i
		const body = readFileSync(withPath(i), 'utf-8')
		obj.title = i
		obj.short = body.slice(0, 200)
		return obj
	})

writeFileSync(resolve(__dirname, '../articles/list.json'), JSON.stringify(list, null, 2))

function read(s) {
	let i = 0
	let res = ''
	let title = ''
	while (!((s[i] === '-' && s[i + 1] === '-' && s[i + 2] === '-') || i === s.length - 1)) {
		title += s[i]
		i++
	}
	i += 3
	while (!((s[i] === '-' && s[i + 1] === '-' && s[i + 2] === '-') || i === s.length - 1)) {
		res += s[i]
		i++
	}
	return [title.trim(), res.trim()]
}
