import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {BigButtonContainer} from './Buttons';
import emailjs from 'emailjs-com';

export default class ModalForm extends Component {

    state={ name: null }
    handleChange = (e) => this.setState({name: e.target.value})


    //send email from form below via emailjs
    sendEmail(name){
        //alert("Not currently Implemented, Send and email directly at ienglehart13@gmail.com :)")
        /*
        //alert("This function is not currently implemented, sorry. You can email me directly at ienglehart13@gmail.com")
        name.preventDefault();

        emailjs.sendForm('service_fw4xu9w', 'template_t2dryya', name.target, 'user_urBSH40An3KgHVj0MTryY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        //confirm send and reset form.
        alert("sent :)");
        //e.target.reset();
        */
    }


    render(){
    return(
        <Modal 
            show={this.props.isOpen} 
            onHide={this.props.closeModal}
        >

        <Modal.Header closeButton>
            <Modal.Title>Send Email?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {/* Figure out how to print the text from the form here?*/}
            {this.props.name}
            Confirm that you would like to send an email.
        </Modal.Body>

        <Modal.Footer>
            <BigButtonContainer variant="primary" type="submit" onClick={() => this.props.handleSubmit(this.state.name)} >
            Send 
            </BigButtonContainer>
        </Modal.Footer>

    </Modal>
    )
  }
}