import { Router } from 'frame3'
import { Flex } from '~/widget/flex/flex'
import myy from '../../assets/myy.png'
import { Frame3 } from '../frame3/frame3'
import { Navi } from '../navi/navi'
import './app.css'

type IApp = {}

export const App = ({}: IApp) => {
	return (
		<Flex layout='v' classes='app'>
			<Navi />
			<Flex layout='v' classes={'scroll'}>
				<Flex layout='v' classes={'body'}>
					<Router
						path=''
						component={() => () =>
							(
								<>
									<img src={myy}></img> <h1>开发中...</h1>
								</>
							)}></Router>
					<Router path='frame3doc' component={Frame3}></Router>
					<Router
						path='blog'
						component={() => () =>
							(
								<>
									<img src={myy}></img> <h1>开发中...</h1>
								</>
							)}></Router>
				</Flex>
			</Flex>
		</Flex>
	)
}
