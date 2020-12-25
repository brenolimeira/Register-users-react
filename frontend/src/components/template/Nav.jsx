import './Nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavLink to="/home" activeClassName="selected">
                <i className="fa fa-home"></i> Início
            </NavLink>
            <NavLink to="/users" activeClassName="selected">
                <i className="fa fa-users"></i> Usuários
            </NavLink>
        </nav>
    </aside>