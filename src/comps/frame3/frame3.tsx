import { useFetch } from '~/shared'
import { Doc } from '../doc/doc'
import './frame3.css'

type IFrame3 = {}

export const Frame3 = ({}: IFrame3) => {
	let $md = useFetch('frame3.md')

	return (
		<div classes='frame3'>
			<Doc md={$md}></Doc>
		</div>
	)
}
