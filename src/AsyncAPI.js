import React, { Component } from 'react';
import './App.css';

// basic fetch
class AsyncAPI extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	async componentDidMount() {
		try {
					const response = await fetch(
						`https://api.coinmarketcap.com/v1/ticker/?limit=5`
					);

          //fetch does not reject the Promise in case of HTTP errors.
          //You must check the ok property of the response object.

					if (!response.ok) {
						throw Error(response.statusText);
					}
					const json = await response.json();
					this.setState({ data: json });
				} catch (error) {
			console.error(error);
		}
	}
	render() {
		return (
			<div className='App'>
				<h2> Get data using basic async / await </h2>
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

export default AsyncAPI;
