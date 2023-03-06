import { Doc } from '../doc/doc'
import './frame3.css'

type IFrame3 = {}

export const Frame3 = ({}: IFrame3) => {
	let $md = ''
	fetch('/docs/docs/Frame3.md').then(async (r) => ($md = await r.text()))

	return (
		<div classes='frame3'>
			<Doc md={$md}></Doc>
		</div>
	)
}
