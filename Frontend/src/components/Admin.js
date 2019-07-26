import React from 'react'
import { Form, Button, Input, Container} from 'semantic-ui-react'

export default class AdminForm extends React.Component {
   state={}
   handleChange = (e) => {
       const name = e.target.name;
       const value = e.target.value
       this.setState({
         [name] : value
       })
   }
    render() {
        return (
            <div>
                <Container>
              <Form size='huge'>
                  <Form.Group widths='equal'>
                   <Form.Field control={Input} label='First name' type='text' name='fname' placeholder='First name' value={this.state.value} onChange={this.handleChange}/>
                   <Form.Field control={Input} label='Last name' type='text' name='lname' placeholder='Last name' value={this.state.value} onChange={this.handleChange}/>
                      </Form.Group>
                      <Form.Field label='Email' name='email' type='text' placeholder='email@email.com' control={Input} value={this.state.value} onChange={this.handleChange}/>
                      <Form.Group>
                          <Form.Field label='Password' name='password' type='password' placeholder='******' control={Input} value={this.state.value} onChange={this.handleChange}/>
                          <Form.Field label='Confirm Password' name='cpassword' type='password' placeholder='*******' control={Input} value={this.state.value} onChange={this.handleChange}/>
                          </Form.Group>
                          <Form.Field label='CNIC' name='cnic' type='text' placeholder='xxxxx-xxxxxxx-x' control={Input} value={this.state.value} onChange={this.handleChange}/>
                          <Button size='huge' positive >Submit</Button>
                  </Form>
                  </Container>
            </div>
        );
    }
}