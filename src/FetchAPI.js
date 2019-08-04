import React, { Component } from 'react';
import './App.css';

// basic fetch 
class App extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}
	//The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline,
	// such as requests and responses. It also provides a global fetch() method that provides an easy,
	// logical way to fetch resources asynchronously across the network.

	componentDidMount() {
		fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=5`)
			.then(res => res.json())
			.then(json => this.setState({ data: json }))
			.catch(error => console.error('Error', error));
	}
	render() {
		return (
			<div className='App'>
				<h2> Get data using basic Fetch API</h2>
				<ul className='App-header'>
					{this.state.data.map(el => (
						<li key={el.id}>
							{el.name} : {el.price_usd}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
