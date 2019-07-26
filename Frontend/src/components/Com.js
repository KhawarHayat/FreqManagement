import React, {PureComponent} from 'react'
import { Container, Segment, Form, Button} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import MainMenu from './mainMenu';
import Axios from 'axios';

var headers = {
    
  'Authorization': "bearer" +" "+ localStorage.getItem('token') 
}

export default class Communication extends PureComponent {
    state = {}
    handleChange = (e) =>{
      this.setState({
          [e.target.name] : e.target.value
      })
    }
   valid = () => {
     const  err = {}
       if(this.state.band === undefined || this.state.band == ""){
           err.bandErr = true
       }
       if(this.state.channel === undefined || this.state.channel == ""){
        err.channelErr = true
    }
    if(this.state.freq === undefined || this.state.freq == ""){
        err.freqErr = true
    }
    this.setState({
        ...this.state,
        ...err
    })
   }
   handleSubmit = (e) => {
   
   this.valid()
   if(
       this.state.channelErr != true &&
       this.state.freqErr != true &&
       this.state.bandErr != true 
       ){   
         
           Axios.post('http://localhost:4000/communication',this.state, { headers : headers})
           .then((res) => {
             if(res.data == "save"){
               this.setState({
                 redirect : true
               })
             }
             else{
               this.setState({
                 channelErr: true,
                 freqErr: true,
                 bandErr: true
               })
             }
           })
       }
       
   }
   render(){
    return (
        <div>
          {this.state.redirect && (
            <Redirect to='/config'/>
          )}
            <MainMenu />
          <Container>
              <Segment>
          <Form size = 'huge'>
             <center> <h1>Communication Modes</h1></center>
              <br/>
          
            {this.state.bandErr ?
             (
              <Form.Input fluid label='Supported Band/Spectrum' 
              placeholder='HF/VHF'
              type='text' 
              name = 'band'
              widths={3}
              value={this.state.value}
              onChange={this.handleChange}
              error
              />     
             ) 
             : (
              <Form.Input fluid label='Supported Band/Spectrum' 
              placeholder='HF/VHF'
              type='text' 
              name = 'band'
              value={this.state.value}
              onChange={this.handleChange}
              />
             )}
             
        
        <br/>
          
            {this.state.channelErr ? 
            (
              <Form.Input fluid label='Channel Spacing' 
          placeholder='00KHz'
          type='text'
          name = 'channel'
          value={this.state.value}
          onChange={this.handleChange}
          error
          />
            )
          :
          (
            <Form.Input fluid label='Channel Spacing' 
          placeholder='00KHz'
          type='text'
          name = 'channel'
          value={this.state.value}
          onChange={this.handleChange}
          />
          )
          }

        
        <br/>
         {
             this.state.freqErr ? (
                <Form.Input fluid label='Frequencies' 
                placeholder='00KHz'
                type='text' 
                name = 'freq'
                widths={3}
                value={this.state.value}
                onChange={this.handleChange}
                error
                />
             ) : 
             (
                <Form.Input fluid label='Frequencies' 
                placeholder='00KHz'
                type='text' 
                name = 'freq'
                widths={3}
                value={this.state.value}
                onChange={this.handleChange}
                
                />
             )
         }
        <Button primary size='huge' content='Submit' onClick={this.handleSubmit}/>
              </Form>
              </Segment>
          </Container>
          </div>
    
    )
       
}
}