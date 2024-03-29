import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary style={{backgroundColor:'grey'}}>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        
        <Menu.Menu position='right'>
        <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick} />
          
          
        </Menu.Menu>
      </Menu>
    )
  }
}