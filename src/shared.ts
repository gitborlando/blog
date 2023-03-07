import { $reactive } from 'frame3'
import hljs from 'https://cdn.jsdelivr.net/npm/highlight.js@11.7.0/+esm'
import MD from 'markdown-it'

const base = process.env.NODE_ENV === 'production' ? '/blog/articles/' : '/articles/'

export const docsPath = (path: string) => base + path

export function useFetch(name: string) {
	let $md = $reactive('')
	fetch(docsPath(name)).then(async (r) => ($md = await r.text()))
	return $md
}

export const markdown = new MD({
	highlight: function (str, lang) {
		if (!lang || !hljs.getLanguage(lang)) return ''
		try {
			return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
		} catch (__) {}
	},
})
