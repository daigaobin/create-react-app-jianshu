import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import { GlobalStyle } from './style';
import { GlobalStyleIconFont } from './statics/iconfont/iconfont';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<GlobalStyle />
					<GlobalStyleIconFont/>
					<Header />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
