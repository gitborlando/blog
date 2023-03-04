import { Flex } from '~/widget/flex/flex'
import shiyangyang from '../../assets/shiyangyang.jpeg'
import './navi.css'

type INavi = {}

export const Navi = ({}: INavi) => {
	return (
		<Flex layout='h' className='navi'>
			<Flex layout='c' href='#abc' className='item'>
				<img class='logo' src={shiyangyang}></img>
			</Flex>
			<Flex as='a' layout='c' href='#abc' className='item'>
				abc
			</Flex>
			<Flex as='a' layout='c' href='#cbd' className='item'>
				cbd
			</Flex>
		</Flex>
	)
}
