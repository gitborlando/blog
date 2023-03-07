import { $ref, effect } from 'frame3'
import './doc.css'
//@ts-ignore
import { markdown } from '~/shared'

type IDoc = {
	md: string
}

export const Doc = ({ md }: IDoc) => {
	let $div = $ref('div')
	effect(() => {
		if (!$div) return
		$div.innerHTML = markdown.render(md)
	})

	return <div ref={$div} classes={'markdown-body'}></div>
}
