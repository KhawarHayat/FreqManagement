import React, {PureComponent} from 'react'
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Form, Input, Container, Button, Segment } from 'semantic-ui-react'
import MainHeader from './mainMenu';
import Auth from './AUTH'
var headers = {
    
    'Authorization': "bearer" +" "+ localStorage.getItem('token') 
}




export default class Main extends PureComponent {
  state= {
  }

  handleChange = (e) => {
   this.setState({
       [e.target.name] : e.target.value 
   })
  }
  valid = () => {
      
        const err = {}
    if(this.state.Afrom == undefined || this.state.Afrom == ''){
     
      err.AfromErr = true
    }
    else{
      err.AfromErr = false
    }
     if(this.state.Ato == undefined || this.state.Ato == ''){
     
      err.AtoErr = true
    }
    else{
      err.AtoErr = false
    }
  
    if(this.state.Ffrom == undefined || this.state.Ffrom == ''){
     
      err.FfromErr = true
    }
    else{
      err.FfromErr = false
    }
    if(this.state.Fto == undefined || this.state.Fto == ''){
    
      err.FtoErr = true
    }
    else{
      err.FtoErr = false
    }

    this.setState({
      ...this.state,
      ...err
    })
  }
  handleSubmit = (e) => {
    
    this.valid()
    if(this.state.AfromErr == false && 
      this.state.AtoErr == false &&
      this.state.FfromErr == false &&
      this.state.FtoErr == false 
      ){ 
        Axios.post('http://localhost:4000/authforbid',  this.state, {headers: headers} )
        .then((res) => {
        if(res.data == 'error' || res.data == false){
         this.setState({
           AfromErr : true,
           AtoErr: true,
           FfromErr: true,
           FtoErr: true
         })
        }
        else if(res.data == 'save'){
         this.setState({
           redirect : true
         })
         
        }
        else{
          console.log('Not')
        }
        })

    }
    
  }
    render(){
        return (
            <div>
              {this.state.redirect && (
                <Redirect to = "/config" />
              )}
            <MainHeader/>     
          <Container>
            <br/>
            <center><h1>Manage Authorized / Forbidden Frequencies</h1></center> 
             <br/>
              <Segment>
          <Form size='huge'>
              <h1>Authorize</h1>
              <br/>
          <Form.Group widths='equal'>
            {this.state.AfromErr ?
             (
              <Form.Input fluid label='From' 
              placeholder='00KHz'
              type='text' 
              name = 'Afrom'
              value={this.state.value}
              onChange={this.handleChange}
              error
              />     
             ) 
             : (
              <Form.Input fluid label='From' 
              placeholder='00KHz'
              type='text' 
              name = 'Afrom'
              value={this.state.value}
              onChange={this.handleChange}
              />
             )}
             {this.state.AtoErr ? 
             (
              <Form.Input fluid label='To'
              placeholder='00KHz'
              name = 'Ato'
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              error
              />
             ) :
            (<Form.Input fluid label='To'
            placeholder='00KHz'
            name = 'Ato'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            />)
          }
        </Form.Group>
        <br/>
        <h1>Forbidden</h1>
              <br/>
          <Form.Group widths='equal'>
            {this.state.FfromErr ? 
            (
              <Form.Input fluid label='From' 
          placeholder='00KHz'
          type='text'
          name = 'Ffrom'
          value={this.state.value}
          onChange={this.handleChange}
          error
          />
            )
          :
          (
            <Form.Input fluid label='From' 
          placeholder='00KHz'
          type='text'
          name = 'Ffrom'
          value={this.state.value}
          onChange={this.handleChange}
          />
          )
          }
          {
            this.state.FtoErr ?
            (
              <Form.Input fluid label='To' 
          placeholder='00KHz' 
          name = 'Fto'
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
          error
          />
            ) :
            (
              <Form.Input fluid label='To' 
          placeholder='00KHz' 
          name = 'Fto'
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
          />
            )
          }
          
        </Form.Group>
        <Button primary size='huge' content='Submit' onClick={this.handleSubmit}/>
              </Form>
              </Segment>
          </Container>
          </div>
        )
}
}
