import React, { Component } from 'react';
import '../../App.css';

//import Modal from "react-bootstrap/Modal";
//import "bootstrap/dist/css/bootstrap.min.css";
import ModalForm from '../components/contactModal';

export default class Contact extends Component {
    //Modal functionality:
    state = {
      isOpen: false
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    //send email from form below via emailjs
    sendEmail(e){
        alert("This function is not currently implemented, sorry. You can email me directly at ienglehart13@gmail.com")
        /*e.preventDefault();

        emailjs.sendForm('service_fw4xu9w', 'template_t2dryya', e.target, 'user_urBSH40An3KgHVj0MTryY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        //confirm send and reset form.
        alert("sent :)");
        e.target.reset();
        */
    }
    render(){
      return(
      //simple input form, sent using emailjs >add a modal confirmation, displays example of email?<
      <div>

      <h2 className="contact-title">Contact Me!</h2>

      <form className="form-style" /*onSubmit={this.openModal}*/>    
        <input name="user_name" type="text" className="feedback-input" placeholder="Name"/>   
        <input name="user_email" type="text" className="feedback-input" placeholder="Email"/>
        <textarea name="message" className="feedback-input contact-text" placeholder="Comment"></textarea>
        <input type="button" value="SUBMIT" className="submit-btn" onClick={this.openModal}/>
      </form>

      {this.state.isOpen ?
        <ModalForm
          closeModal={this.closeModal}
          isOpen={this.state.isOpen}
          handleSubmit={this.sendEmail}
        />
        :
        null
      }
      </div>
      )
}
}