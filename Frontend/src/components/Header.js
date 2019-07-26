import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary style={{backgroundColor:'grey'}}>
       <Link to='/'> <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/search'>  <Menu.Item name='Search' active={activeItem === 'Search'} onClick={this.handleItemClick} />
          </Link>
        <Menu.Menu position='right'>
       <Link to='/addEmployee'>  <Menu.Item name='Sign Up' active={activeItem === 'Sign-up'} onClick={this.handleItemClick} />
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}