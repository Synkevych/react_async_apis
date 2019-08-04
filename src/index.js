import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FetchAPI from './FetchAPI';
import AsyncAPI from './AsyncAPI';
// import XMLHttpRequest from './XMLHttpRequest';

ReactDOM.render(
<div> 
{/* <XMLHttpRequest /> */}
<FetchAPI />
<AsyncAPI />
</div>
, document.getElementById('root'));
