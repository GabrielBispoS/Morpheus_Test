import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const links = [
	{route: "/users", label: "Listar Usuários"},
	{route: "/create_user", label: "Cadastrar Usuário"}
];

export default class Navbar extends Component {

    renderLink = () => {
        return links.map( link => 
            <Link key={link.route} className="nav-link" to={link.route}>
                {link.label}
            </Link>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        { this.renderLink() }
                    </ul>
                </div>
            </nav>
        )
    }
};