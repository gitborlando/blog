import { $ref, effect } from 'frame3'
import hljs from 'highlight.js'
import MD from 'markdown-it'
import './doc.css'

type IDoc = {
	md: string
}

export const Doc = ({ md }: IDoc) => {
	let $div = $ref('div')
	effect(() => {
		if (!$div) return
		$div.innerHTML = new MD({
			highlight: function (str, lang) {
				if (lang && hljs.getLanguage(lang)) {
					try {
						return hljs.highlight(str, { language: 'ts', ignoreIllegals: true }).value
					} catch (__) {}
				}
				return '' // 使用额外的默认转义
			},
		}).render(md)
	})
	return <div ref={$div} classes={'markdown-body'}></div>
}
