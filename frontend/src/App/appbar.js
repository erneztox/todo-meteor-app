import React from 'react'
import {Link, IndexLink} from 'react-router'

const MenuBar = () => {
  return (
    <div>
      <ul>
        <li><IndexLink to='/' className='show' activeStyle={{ fontWeight: 'bold' }}>||||</IndexLink></li>
        <li><a className='title'>My To-Do App</a></li>
        <li className='dropdown'>
          <a href='javascript:void(0)' className='dropbtn'>Menu</a>
          <div className='dropdown-content'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='/admin'>Link 3</a>
            <Link to='/admin' className='show' activeStyle={{ fontWeight: 'bold' }}>Admin</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar
