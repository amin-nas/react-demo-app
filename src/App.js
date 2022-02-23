import Nav from './components/nav'
import CurrentEarnings from './components/current-earnings'
import ThisYear from './components/this-year'
import RecentPays from './components/recent-pays'
import DirectDeposit from './components/direct-deposit'
import Documents from './components/documents'

import './styles/app.sass'

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='content-ct'>
				<h1>Earnings</h1>
				<div className='content'>
					<div className='main'>
						<CurrentEarnings />
						<ThisYear />
					</div>
					<div className='sidebar'>
						<RecentPays />
						<DirectDeposit />
						<Documents />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App