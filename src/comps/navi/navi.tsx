import { Flex } from '~/widget/flex/flex'
import shiyangyang from '../../assets/shiyangyang.jpeg'
import './navi.css'

type INavi = {}

export const Navi = ({}: INavi) => {
	return (
		<Flex layout='v' classes='navi'>
			<Flex layout='h' classes={'body'}>
				<Flex layout='c' href='#' classes='item'>
					<img classes='logo' src={shiyangyang}></img>
				</Flex>
				<Link hash=''>主页</Link>
				<Link hash='frame3doc'>frame3</Link>
				<Link hash='blog'>blog</Link>
			</Flex>
		</Flex>
	)
}

let $currentHash = location.hash.slice(1)
window.addEventListener('hashchange', () => {
	$currentHash = location.hash.slice(1)
})

const Link = ({ hash, children }: { hash: string; children: string }) => {
	return (
		<Flex as='a' layout='c' href={'#' + hash} classes={['item', $currentHash === hash && 'active']}>
			{children}
		</Flex>
	)
}
