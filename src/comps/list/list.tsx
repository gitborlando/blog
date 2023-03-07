import { $reactive, $ref, effect } from 'frame3'
import { docsPath, useFetch } from '~/shared'
import { Flex } from '~/widget/flex/flex'
import './list.css'

type IList = {
	$md: string
}

type IListObj = {
	path: string
	title: string
	short: string
}

export const List = ({ $md }: IList) => {
	let $list = $reactive<IListObj[]>([])
	let $res = useFetch('list.json')
	effect(() => {
		if (!$res) return
		$list = new Array(100).fill((JSON.parse($res) as IListObj[])[0])
	})

	const click = (path: string) => () => {
		fetch(docsPath(path)).then(async (r) => ($md = await r.text()))
	}

	return (
		<Flex layout='v' classes='list'>
			{$list.map(({ short, path, title }, i) => (
				<Flex layout='v' classes={'block'}>
					<Flex as='h3' layout='h' classes={'title'} onClick={click(path)}>
						{title + '--' + i}
					</Flex>
					<P short={short}></P>
				</Flex>
			))}
		</Flex>
	)
}

const P = ({ short }: { short: string }) => {
	let $p = $ref('p')
	effect(() => {
		if (!$p) return
		$p.innerHTML = short + ' ...'
	})
	return (
		<Flex layout='h' classes={'p'}>
			<div ref={$p} classes={['markdown-body']}></div>
		</Flex>
	)
}
