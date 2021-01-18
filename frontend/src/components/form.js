import React, {Component} from 'react';

export default class Form extends Component {

    render() {
        return (
            <>

            <form method="POST" action="/create_user">
            <fieldset>
                <div>

                    <input 
                        type="text"
                        placeholder="Insira seu Nome" 
                        id="reg_cpf" 
                        name="reg_cpf" />
                        
                </div>

                <div>

                    <input 
                        type="text"
                        placeholder="Insira seu Sobrenome" 
                        id="reg_cod_assinante" 
                        name="reg_cod_assinante" />

                </div>

                <div>
                
                <label>
                    Masculino
                </label>

                <input 
                    type="radio"
                    value="M" 
                    id="mSexo" 
                    name="reg_email" />

                <input 
                    type="radio"
                    value="F" 
                    id="fSexo" 
                    name="form-align" />

                <label>
                    Feminino
                </label>

                </div>

                <div>
                	<input type="submit" value="Enviar"/>
                </div>

            </fieldset>
            </form>
            
            </>
        )

    }
}
