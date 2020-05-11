import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => (
    <header>
      <h1>My Refuge</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>  {/* NavLink allows for easier styling */}
      <NavLink to="/categories" activeClassName="is-active">Categories </NavLink>
      {/* <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> */}
      {/* <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink> */}
      <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
    </header>
)

export default Header