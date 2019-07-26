import React, {PureComponent} from 'react'
import { Container, Segment, Form, Button} from 'semantic-ui-react'
import MainMenu from './mainMenu';
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

var headers = {
    
    'Authorization': "bearer" +" "+ localStorage.getItem('token') 
  }

export default class Radio extends PureComponent {
    state = {}
    handleChange = (e) =>{
      this.setState({
          [e.target.name] : e.target.value
      })
    }
   valid = () => {
     const  err = {}
       if(this.state.model === undefined || this.state.model == ""){
           err.modelErr = true
       }
       if(this.state.freq === undefined || this.state.freq == ""){
        err.freqErr = true
    }
    if(this.state.antenna === undefined || this.state.antenna == ""){
        err.antennaErr = true
    }
    if(this.state.comMode === undefined || this.state.comMode == ""){
        err.comModeErr = true
    }
    if(this.state.deployment === undefined || this.state.deployment == ""){
        err.deploymentErr = true
    }
    if(this.state.data === undefined || this.state.data == ""){
        err.dataErr = true
    }
    this.setState({
        ...this.state,
        ...err
    })
   }
   handleSubmit = (e) => {
   e.preventDefault()
   this.valid()
   if(
       this.state.modelErr != true &&
       this.state.freqErr != true &&
       this.state.antennaErr != true &&
       this.state.comModeErr != true &&
       this.state.deploymentErr != true &&
       this.state.dataErr != true  
       ){
          
          Axios.post('http://localhost:4000/radio', this.state, { headers : headers })
          .then((res) => {
            console.log(res.data)
            if(res.data == 'save'){
                this.setState({
                    redirect: true
                })
            }
            else{
                this.setState({
                    modelErr: true,
                    freqErr: true,
                    antennaErr: true,
                    comModeErr: true,
                    deploymentErr: true,
                    dataErr: true
                })
            }
          })
       }
    
   }
   render(){
    return (
        <div>
            {
                this.state.redirect && (
                    <Redirect to='/config'/>
                )
            }
            <MainMenu />
          <Container>
              <Segment>
          <Form size = 'huge'>
             <center> <h1>Radio Sets</h1></center>
              <br/>
          
            {this.state.modelErr ?
             (
              <Form.Input fluid label='Model' 
              placeholder='Model'
              type='text' 
              name = 'model'
              value={this.state.value}
              onChange={this.handleChange}
              error
              />     
             ) 
             : (
                <Form.Input fluid label='Model' 
                placeholder='Model'
                type='text' 
                name = 'model'
                value={this.state.value}
                onChange={this.handleChange}
                
                />
             )}
             
        
        <br/>
          
            {this.state.freqErr ? 
            (
              <Form.Input fluid label='Authorized Frequency Range' 
          placeholder='HF/VHF/UHF'
          type='text'
          name = 'freq'
          value={this.state.value}
          onChange={this.handleChange}
          error
          />
            )
          :
          (
            <Form.Input fluid label='Authorized Frequency Range' 
          placeholder='HF/VHF/UHF'
          type='text'
          name = 'freq'
          value={this.state.value}
          onChange={this.handleChange}
          />
          )
          }

        
        <br/>
         {
             this.state.antennaErr ? (
                <Form.Input fluid label='Antenna Type' 
                placeholder='ITU'
                type='text' 
                name = 'antenna'
                value={this.state.value}
                onChange={this.handleChange}
                error
                />
             ) : 
             (
                <Form.Input fluid label='Antenna Type' 
                placeholder='ITU'
                type='text' 
                name = 'antenna'
                value={this.state.value}
                onChange={this.handleChange}
                />
             )
         }
         {
             this.state.comModeErr ? (
                <Form.Input fluid label='Communication Modes' 
                placeholder='ALE'
                type='text' 
                name = 'comMode'
                value={this.state.value}
                onChange={this.handleChange}
                error
                />
             ) : 
             (
                <Form.Input fluid label='Communication Modes' 
                placeholder='ALE'
                type='text' 
                name = 'comMode'
                value={this.state.value}
                onChange={this.handleChange}
                />
             )
         }
          
          {
             this.state.deploymentErr ? (
                <Form.Input fluid label='Deployment' 
                placeholder='MP'
                type='text' 
                name = 'deployment'
                value={this.state.value}
                onChange={this.handleChange}
                error
                />
             ) : 
             (
                <Form.Input fluid label='Deployment' 
                placeholder='MP'
                type='text' 
                name = 'deployment'
                value={this.state.value}
                onChange={this.handleChange}
                />
             )
         }

            { 
             this.state.dataErr ? (
                <Form.Input fluid label='Voice/Data Compatibility' 
                type='text' 
                name = 'data'
                value={this.state.value}
                onChange={this.handleChange}
                error
                />
             ) : 
             (
                <Form.Input fluid label='Voice/Data Compatibility' 
                type='text' 
                name = 'data'
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