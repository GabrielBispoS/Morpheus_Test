import React, {Component} from 'react';
import './../styles.css'

export default class Form extends Component {

    render() {
        return (
            <>

            <div className="Register_container">

                <div className="Container">
                <h2> Cadastrar Usuário </h2>
                </div>

                <form action="/create_user" method="POST">

                    <div className="form-group">

                      <label for="FName">Nome: </label>
                      <input 
                            type="text"
                            class="form-control"
                            id="fname"
                            placeholder="Insira seu Nome" />

                    </div>

                    <div className="form-group">

                      <label for="LName">Sobrenome: </label>
                      <input 
                            type="text"
                            className="form-control"
                            id="lname"
                            placeholder="Insira seu Sobrenome" />

                    </div>

                    <div className="form-group">

                        <label for="email">E-mail </label>
                        <input 
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Insira seu Email"
                             />

                    </div>

                    <div className="form-group">

                        <button
                            type="submit"
                            id="submitbtn"
                             > Cadastrar </button>

                    </div>

                </form>

            </div>
    

            </>
        )

    }
}
