import { Router } from 'frame3'
import { Navi } from '../navi/navi'
import './app.css'

type IApp = {}

export const App = ({}: IApp) => {
	return (
		<div class='app'>
			<Navi />
			<Router path='abc' component={() => () => <h1>comp1</h1>}></Router>
			<Router path='cbd' component={() => () => <h1>CBD</h1>}></Router>
		</div>
	)
}
