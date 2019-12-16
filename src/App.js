import React, { Component } from 'react';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
import logo from './logo.svg';
import './App.css';
import { UserState } from './actions';
import user, {} from "./reducers";

import RegistrationPopUp from './components/registration-pop-up/registration-pop-up';
import { connect } from 'react-redux';
import getUserIfAny from './containers/User';

class App extends Component {
  constructor(props){
    super(props);
  } 
  render() {
    if(UserState.IS_REGISTERED){
      return (
        <h1>Hi</h1>
      )
    }else{
      <RegistrationPopUp></RegistrationPopUp>
    }
  }
}

const mapStateToProps = state => ({
  user: user(state),
  pending: user(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser: getUserIfAny
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);