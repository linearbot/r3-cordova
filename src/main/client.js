import ReactDOM from 'react-dom';
import HelloWorld from '../containers/LoginContainer'
import {Router,hashHistory} from 'react-router';
import routes from '../components/Routes';
import { createStore , combineReducers , applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';

const actionReducer = function(state = {}, action) {
	switch (action.type) {
		case 'FETCH_PRODUCTS':
		  return Object.assign({}, state, {
			products: action.products
		  });

		default:
		  return state;
  }
}

const reducers = combineReducers({
  actionState: actionReducer
});

const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

var destination = document.getElementById('app');

ReactDOM.render(
<Provider store={store}>
	 < Router history={hashHistory} routes={routes} />
</Provider>,destination);
