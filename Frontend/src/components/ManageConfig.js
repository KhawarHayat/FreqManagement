import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import MainMenu from './mainMenu';

const ManageConfig = () => (
  <>
  <MainMenu />
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <Card.Group style={{flexDirection : 'row', justifyContent: 'center'}}>
  <Link to = '/config/managefreq'> <Card>
      <Card.Content>
        <Card.Header>Athorizes/Forbidden Frequencies</Card.Header>
        </Card.Content>
    </Card>
   </Link>
   <Link to='/config/managecom'>
    <Card>
      <Card.Content>
        <Card.Header content='Manage Communication Modes' />
        </Card.Content>
    </Card>
   </Link>
    
  </Card.Group>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <Card.Group style={{flexDirection : 'row', justifyContent: 'center'}}>
  <Link to='/config/manageradio'>
  <Card>
      <Card.Content
        header='Manage Radio Sets'
        />
    </Card>
    </Link>
  <Link to='/config/manageantenna'>
    <Card
      header='Manage Antennas'
      />
      </Link>
    </Card.Group>
  </>
)

export default ManageConfig
