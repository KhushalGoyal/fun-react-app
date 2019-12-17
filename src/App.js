// import logo from './logo.svg';
import './App.css';
// import { UserState } from './actions';
import RegistrationPopUp from './components/registration-pop-up/registration-pop-up';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getUserIfAny from './containers/User';


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (    
      <div>  
        <RegistrationPopUp user={this.props.user}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userState,
  pending: state.pending
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser: getUserIfAny
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);