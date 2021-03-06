import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {carSalesReducer} from './reducers/carSalesReducer'

import 'bulma/css/bulma.css';
import './styles.scss';
import { fromEventPattern } from 'rxjs';

const store = createStore(carSalesReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, rootElement);