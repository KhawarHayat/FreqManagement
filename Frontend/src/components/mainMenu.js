import React,{ Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class MainMenu extends Component {
  state = {
    redirect : false
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handlelogout = () => {
    localStorage.clear()
    this.setState({
      redirect: true
    })
  }
  render() {
    const { activeItem } = this.state

    return (
        <>
        {this.state.redirect && (
          <Redirect to='/' />
        )}      
      <Menu pointing secondary style= {{backgroundColor : 'grey'}}>
       <Link to='/config'> <Menu.Item
          name='Config'
          active={activeItem === 'Config'}
          onClick={this.handleItemClick}
        >
          System Configration And Setting
        </Menu.Item> </Link>

       <Link to = '/manageNets'> <Menu.Item name='Nets' active={activeItem === 'Nets'} onClick={this.handleItemClick}>
          Manage Networks
        </Menu.Item>
        </Link>
        <Menu.Menu position='right'>
        <Menu.Item name='logout' active={activeItem === 'Logout'} onClick={this.handlelogout}>
            Logout
          </Menu.Item>
          </Menu.Menu>
        
      </Menu>
      </>
    )
  }
}
