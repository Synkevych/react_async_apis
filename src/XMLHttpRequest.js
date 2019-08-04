import React, { Component } from 'react';
import './App.css';

// basic fetch
class XMLHttpRequest extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}
	//§Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from
	// a URL without having to do a full page refresh. This enables a Web page to update just
	// part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily
	// in AJAX programming.

	componentDidMount() {
		let xhr = new XMLHttpRequest();
		let self = this;
		// xhr.onreadystatechange = function(e) {
		// 	console.log(this);
		// 	if (xhr.readyState === 4 && xhr.status === 200) {
		// 		const json = JSON.parse(xhr.responseText);
		// 		self.setState({ data: json });
		// 	}
		};
		xhr.open('get', 'https://api.coinmarketcap.com/v1/ticker/?limit=5', true);
		xhr.responseType = 'json';
		xhr.send();
		xhr.onload = function() {
			if (xhr.status !== 200) {
				console.error(`Error,${xhr.status} : ${xhr.statusText}`);
			} else {
				const json = JSON.parse(xhr.responseText);
				this.setState({ data: json });
			}
		};
	}
	render() {
		return (
			<div className='App'>
				<h2> Get data using XMLHttpRequest</h2>
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

export default XMLHttpRequest;
