import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import { GlobalStyle } from './style';
import { GlobalStyleIconFont } from './statics/iconfont/iconfont';
import store from './store';
import Home from './views/home';
import Detail from './views/detail';


class App extends Component {
	render() {
		return (
			<Provider store={store}> 
				<BrowserRouter>
					<div>
						<GlobalStyle />
						<GlobalStyleIconFont />
						<Header />
						<Route path="/" exact component={Home}></Route>
						<Route path="/detail/:id" exact component={Detail}></Route>
						{/* <Route path="/detail" exact render={() => <div>detail</div>}></Route> */}
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
