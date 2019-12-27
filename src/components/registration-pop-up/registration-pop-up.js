import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { localStorageService } from '../../service/localStorage';
import userContainer from '../../containers/User'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RegistrationPopUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            firstname : "",
            lastname : "",
            email : ""
        }
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }   
    render() {
        const { user } = this.props;
        return (
            !user &&
            <>
                <Modal show={this.state.show} animation={true}>
                        <Modal.Header>
                            <Modal.Title>Please Register</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="Enter First Name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="Enter Last Name" />
                                </Form.Group>
                                
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" value={this.state.email}  onChange={this.handleChange} placeholder="Enter Email" />
                                </Form.Group>

                                <Button variant="primary" onClick={this.handleCloseClick}>
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                        {/* <Modal.Footer>
                            <Button variant="primary">
                                Save Changes
                            </Button>
                        </Modal.Footer> */}
                </Modal>
            </>
        )
    }

    handleChange(event){
        let key = event.target.name;
        let value = event.target.value;
        let newState = {};
        newState[key] = value;
        this.setState(newState)
    }

    handleCloseClick() {
        if(this.state.firstname  !== "" && this.state.lastname !== "" && this.state.email !== ""){
            let userDetails = localStorageService.addUser(this.state);
            this.props.updateUserState(userDetails);
            this.setState((state) => {
                return {
                    show: false,
                    firstname : "",
                    lastname : "",
                    email : ""
                }
            })
        }
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    updateUserState: userContainer.updateUserState
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(RegistrationPopUp);
