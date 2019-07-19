import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import { GlobalStyle } from './style';
import { GlobalStyleIconFont } from './statics/iconfont/iconfont';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<GlobalStyle />
						<GlobalStyleIconFont />
						<Header />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
