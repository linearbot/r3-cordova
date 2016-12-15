import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
		render () {
			return (
				 < div>
				 <div className="banner" style={{'backgroundColor' : '#50494f','padding':'10px','color':'white','fontSize': '25px','minHeight':'60px'}}></div>
				 < div className = "content" style={{'backgroundColor' : '#c1e1dc','padding':'5px'}}>
           { this.props.children	}
				 <  / div >
				 <  / div > )
		}
}

export default App;
