import React, {Component} from 'react';
import './../styles.css';
import axios from 'axios';
import Form from './form.js';

export default class create_user extends Component {

    render() {
        return (
            <>
            <Form />

            </>
        )

    }

    componentDidMount() {
            axios.post(`http://127.0.0.1:5000/create_user`, {
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            email: document.getElementById('email').value})
             .then(function (response) {
                console.log(response.data);
              });
        }

    
}
