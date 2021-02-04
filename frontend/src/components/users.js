import React, {Component} from 'react';
import './../styles.css'
import axios from 'axios';

export default class users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: [],
        }
    }            

    componentDidMount() {
        
        axios.get(`http://127.0.0.1:5000/users`)
            .then(response => {
                const persons = response.data.users;
                this.setState({ persons });
                  
            });
    }

    render() {
        return (
            <>

            <h1>Titulo da página</h1>
                <ul>
                    {this.state.persons.map(person => <li>{person.fname}</li>)}
                </ul>    

            </>
        )

    }
}
