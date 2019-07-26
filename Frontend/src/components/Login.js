import React, {PureComponent} from 'react'
import { Button, Form, Segment, Container } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import Header from './Header'
import Axios from 'axios';

export default class Login extends React.Component {
  state = {
    redirect : false,
    error : false
  }


  handleChange = (e, {name, value}) => {
   this.setState({
     [name] : value
   })
  }

  handleSubmit = () =>{
    Axios.post('http://localhost:4000/login', this.state)
    .then((res) => {
      if (res.data == 'Invalid Username' || res.data == 'Invalid Password'){
        console.log('aaa')
        this.setState({
          error : true
        })
      }
      else{
        localStorage.setItem("token", res.data['token']);
        localStorage.setItem('ID',res.data['id'])
        this.setState({
          redirect : true
        })
        console.log(this.state.redirect)
      }  
    })
    
  }
  render(){

    return(
      <div>
      <Header />
     <Container>
  {this.state.redirect ? (
  <Redirect to='/config' />
  ): (
<Segment>
     <Form size="large">
       { this.state.error ? (
       <div>
       <Form.Input widths='3' icon='user' name='username' iconPosition='left' label='Username' placeholder='Username' onChange={this.handleChange} error/>
      <Form.Input icon='lock' iconPosition='left' name='password' label='Password' type='password' onChange={this.handleChange} error/>
</div>
) : (
  <div>
  <Form.Input widths='3' icon='user' name='username' iconPosition='left' label='Username' placeholder='Username' onChange={this.handleChange}/>
<Form.Input icon='lock' iconPosition='left' name='password' label='Password' type='password' onChange={this.handleChange}/>
</div>
)}
          <br/>
          <Button content='Login' positive onClick={this.handleSubmit}/>
        </Form>
        </Segment>
  ) }
        
  </Container>
  </div>
    )
  }
}
    