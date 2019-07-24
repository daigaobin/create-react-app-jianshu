import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
import {Globalstyle} from './style.js';
import {IconFontStyle} from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      	<BrowserRouter>
      		<div>
			<Globalstyle></Globalstyle>
			<IconFontStyle></IconFontStyle>
            <Header />
      			<Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
      			<Route path='/detail/:id' exact component={Detail}></Route>
      		</div>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default App;
