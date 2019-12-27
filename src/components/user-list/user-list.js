import React from 'react';
import { http } from '../../service/addUserToMaster';
import userlistContainer from "../../containers/UserList";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserList extends React.Component {
    componentDidMount() {
        http.newSocket()
        this.props.isUsersLoaded();
    }
    render() {
        return (
            <div>
                <h1>User list</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.userList,
    status: state.status
})

const mapDispatchToProps = dispatch => bindActionCreators({
    isUsersLoaded: userlistContainer.ifUserLoaded,
    fetchUserList: userlistContainer.getUserList
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);