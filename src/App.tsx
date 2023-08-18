import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { setCounter } from '@/redux/modules/global';
function App() {
	const [count, setCount] = useState(0)
	// 通过useDispatch 派发事件
	const dispatch = useDispatch();
	// 通过useSelector直接拿到store中定义的value
	const { name } = useSelector((store: any) => store.global);
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React + Redux</h1>
			<p onClick={() => dispatch(setCounter({ name: '大狗子777' }))}>点击修改redux</p>
			<p>redux的值：{name}</p>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
