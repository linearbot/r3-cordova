import { Route, IndexRoute } from "react-router";
import LoginContainer from '../containers/LoginContainer.js';
import HelloWorld from '../components/HelloWorld';
import App from '../components/App';

const routes = (
  < Route path = "/" component = {App} >
		  < IndexRoute component = {LoginContainer}/>
	      <Route path="/home" component={HelloWorld} / >
	<  / Route >
);

export default routes;
