import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { Fragment } from 'react';

import {useSelector} from 'react-redux';
import { authActions } from './store/indexStore';

function App() {

	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (
		<Fragment>
			<Header />
			{isAuthenticated ? <UserProfile /> : <Auth />}
			<Counter />
		</Fragment>
	);
}

export default App;
