import React, {PureComponent} from 'react'
import { Container, Segment, Form, Button} from 'semantic-ui-react'
import MainMenu from './mainMenu';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';

var headers = {
    
    'Authorization': "bearer" +" "+ localStorage.getItem('token') 
  }
export default class Antenna extends PureComponent {
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
       if(this.state.number === undefined || this.state.number == ""){
        err.numberErr = true
    }
    if(this.state.power === undefined || this.state.power == ""){
        err.powerErr = true
    }
    if(this.state.AEG === undefined || this.state.AEG == ""){
        err.AEGErr = true
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
       this.state.numberErr != true &&
       this.state.powerErr != true &&
       this.state.AEGErr != true 
       ){
           Axios.post('http://localhost:4000/antenna',this.state, { headers })
           .then((res) => {
           if(res.data == 'save'){
               this.setState({
                   redirect: true
               })
           }
           else{
               this.setState({
                   modelErr: true,
                   numberErr: true,
                   powerErr: true,
                   AEGErr: true  
               })
           }
           })
       }
       console.log(this.state)
   }
   render(){
    return (
        <div>
            {this.state.redirect && (
                <Redirect to = '/config' />
            )}
            <MainMenu />
          <Container>
              <Segment>
          <Form size = 'huge'>
             <center> <h1>Antenna</h1></center>
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
          
            {this.state.numberErr ? 
            (
              <Form.Input fluid label='Type Number' 
          placeholder='32'
          type='number'
          name = 'number'
          value={this.state.value}
          onChange={this.handleChange}
          error
          />
            )
          :
          (
            <Form.Input fluid label='Type Number' 
            placeholder='32'
            type='number'
            name = 'number'
            value={this.state.value}
            onChange={this.handleChange}
            />
          )
          }

        
        <br/>
         {
             this.state.powerErr ? (
                <Form.Input fluid label='Output Power' 
                placeholder='Power'
                type='text' 
                name = 'power'
                value={this.state.value}
                onChange={this.handleChange}
                error
                />
             ) : 
             (
                <Form.Input fluid label='Output Power' 
                placeholder='Power'
                type='text' 
                name = 'power'
                value={this.state.value}
                onChange={this.handleChange}
                />
             )
         }
         {
             this.state.AEGErr ? (
                <Form.Input fluid label='Azimuth-Elevation-Gain' 
                placeholder='Chart/File'
                type='text' 
                name = 'AEG'
                value={this.state.value}
                onChange={this.handleChange}
                error
                />
             ) : 
             (
                <Form.Input fluid label='Azimuth-Elevation-Gain' 
                placeholder='Chart/File'
                type='text' 
                name = 'AEG'
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