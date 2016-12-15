import React from 'react';
import { connect } from 'react-redux';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
	this.handleUserNameChange = this.handleUserNameChange.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
	this.state = {
		userName : null,
		password : null
	}
  }

  loginActionCreator(data){
	return { type: 'ACTION_LOGIN', data : data} ;
  }
  
  handleLogin(){
	this.props.dispatch(this.loginActionCreator({userName :this.state.userName,password : this.state.password}));
    this.props.router.push('/home');
  }
	
	handleUserNameChange(e) {
	this.setState({userName: e.target.value});
	}
	
	handlePasswordChange(e) {
	   this.setState({password: e.target.value});
	}

  render() {
    return (
      <div className="container-fluid"  style={{'padding':'50px'}}>
        <div className="col-sm-10 col-lg-10 center-block">
            <div className="row" style={{'marginTop' : '3px','margiBottom' : '3px'}}>
              <input type="text" className="form-control" id="inputPassword" placeholder="Username" onChange={this.handleUserNameChange} />
            </div>
            <div className="row" style={{'marginTop' : '3px','margiBottom' : '3px'}}>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={this.handlePasswordChange}/>
            </div>
        </div>
        <div className="col-sm-10 col-lg-10 center-block" style={{'marginTop' : '10px'}}>
           <button type="button" onClick={this.handleLogin} className="btn btn-primary btn-block">Login</button>
        </div>
      </div>
   );
  }
}

function mapStateToProps(state) {
   return {};
}

export default connect(mapStateToProps)(LoginContainer);