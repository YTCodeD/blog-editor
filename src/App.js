import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutersMain from './router';
import './App.css';

function App() {
	return (
		<Router>
			<RoutersMain />
		</Router>
	);
}

export default App;
