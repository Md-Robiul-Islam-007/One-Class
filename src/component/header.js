import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import Time from './Time';

const style = {
    color : 'red'
}

class Header extends Component {
    render(){
        return (
            <div className='bg-light'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink activeStyle={style} exact className="nav-link" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={style} className="nav-link" to='/about'>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={style} className="nav-link" to='/users' >Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={style} className="nav-link" to='/posts' >Posts</NavLink>
                    </li>
                    </ul>
                    <Time />
                </div>
                </nav>
            </div>
            </div>
        )
    }
}

export default Header