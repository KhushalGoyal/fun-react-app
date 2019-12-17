import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
// import FormGroup from 'react-bootstrap/FormGroup';
// import FormControl from 'react-bootstrap/FormControl';

class RegistrationPopUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
        this.handleCloseClick = this.handleCloseClick.bind(this);
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
                                    <Form.Control type="text" placeholder="Enter First Name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" />
                                </Form.Group>
                                
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Email" />
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

    handleCloseClick() {
        this.setState((state) => {
            return { show: false }
        })
    }
}


export default RegistrationPopUp;