import React, {Component} from 'react';
import './../styles.css';
import axios from 'axios';
import form from './form.js';

export default class create_user extends Component {

    render() {
        return (
            <>
            <Form />

            axios.post(`http://127.0.0.1:5000/create_user`, {
            fname: 'Gabriel',
            lname: 'Silva',
            gender: 'm'})
             .then(function (response) {
                console.log(response);
              });



            </>
        )

    }
}
