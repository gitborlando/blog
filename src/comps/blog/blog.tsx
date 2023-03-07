import { $reactive, effect, onMounted, onUpdated } from 'frame3'
import { Flex } from '~/widget/flex/flex'
import { Doc } from '../doc/doc'
import { List } from '../list/list'
import './blog.css'

type IBlog = {}

let scroll = 0

export const Blog = ({}: IBlog) => {
	let $md = $reactive('')
	onMounted(() => {
		window.addEventListener('popstate', () => {
			if ($md) $md = ''
		})
	})
	onUpdated(() => {
		if ($md === '') {
			document.querySelector('.scroll')?.scrollTo({ top: scroll })
		}
	})
	effect(() => {
		if ($md) {
			history.pushState(0, '')
			scroll = document.querySelector('.scroll')?.scrollTop || 0
			document.querySelector('.scroll')?.scrollTo({ top: 0 })
		}
	})
	return (
		<Flex layout='c' classes='blog'>
			<Flex layout='v' style={{ display: $md ? 'none' : 'block' }}>
				<List $md={$md}></List>
			</Flex>
			{$md && <Doc md={$md}></Doc>}
		</Flex>
	)
}
