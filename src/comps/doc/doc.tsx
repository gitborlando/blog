import { $ref, effect } from 'frame3'
import MD from 'markdown-it'
import './doc.css'
//@ts-ignore
import hljs from 'https://cdn.jsdelivr.net/npm/highlight.js@11.7.0/+esm'

type IDoc = {
	md: string
}

export const Doc = ({ md }: IDoc) => {
	let $div = $ref('div')
	effect(() => {
		if (!$div) return
		$div.innerHTML = new MD({
			highlight: function (str, lang) {
				if (!lang || !hljs.getLanguage(lang)) return ''
				try {
					return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
				} catch (__) {}
			},
		}).render(md)
	})

	return <div ref={$div} classes={'markdown-body'}></div>
}
