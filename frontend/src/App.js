import React from 'react';
import axios from 'axios';
import MyHeader from './components/header';

export default class App extends React.Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:5000/users`)
            .then(response => {
                const persons = response.data.users;
                this.setState({ persons });
              
            })

        axios.post(`http://127.0.0.1:5000/create_user`, {
            fname: 'Gabriel',
            lname: 'Silva',
            gender: 'm'})
             .then(function (response) {
                console.log(response);
              })
             .catch(function (error) {
                console.log(error);
          })
        }


    render() {
        return (
            <>
            <MyHeader> </MyHeader>
                <h1>Titulo da página</h1>
                <ul>
                    {this.state.persons.map(person => <li>{person.fname}</li>)}
                </ul>
            </>
        )
    }


}

