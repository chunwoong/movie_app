import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import "./App.css";

function App(){
	return <HashRouter>
		<Navigation/>
		<Route path="/" exact={true} component={Home}></Route>
		<Route path="/about" component={About}></Route>
		<Route path="/movie/:id" component={Detail}></Route>
	</HashRouter>
}

export default App;