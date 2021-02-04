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

                <form method="POST" enctype="multipart/form-data">

                    <div className="form-group">

                      <label for="fname">Nome: </label>
                      <input 
                            type="text"
                            className="fname form-control"
                            id="fname"
                            placeholder="Insira seu Nome" />

                    </div>

                    <div className="form-group">

                      <label for="lname">Sobrenome: </label>
                      <input 
                            type="text"
                            className="lname form-control"
                            id="lname"
                            placeholder="Insira seu Sobrenome" />

                    </div>

                    <div className="form-group">

                        <label for="email">E-mail </label>
                        <input 
                            type="text"
                            className="email form-control"
                            id="email"
                            placeholder="Insira seu Email"
                             />

                    </div>

                    <div className="form-group">

                        <input
                            type="submit"
                            id="submitbtn"
                            value="Cadastrar"
                            />

                    </div>

                </form>

            </div>
    
    

            </>
        )

    }
}
