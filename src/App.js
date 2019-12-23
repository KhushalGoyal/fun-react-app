import './App.css';
import RegistrationPopUp from './components/registration-pop-up/registration-pop-up';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getUserIfAny from './containers/User';
import UserList from './components/user-list/user-list';
import GameZone from './components/game-zone/game-zone';


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (    
      <div className="conatiner">  
        <RegistrationPopUp user={this.props.user}/>
        <div className="row">
          <div className="col-md-4">
            <UserList/>
          </div>
          <div className="col-md-8">
            <GameZone/>
          </div>
        </div>
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