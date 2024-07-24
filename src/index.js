import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.js';

import { store } from './app/store.js';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
	root.render(
		<React.StrictMode>
			<App
				state={store.getState()}
				dispatch={store.dispatch}
			/>
		</React.StrictMode>
	);
}

render();

store.subscribe(render);