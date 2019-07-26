import React from 'react'
import { Form , Input, Container, Segment, Button } from 'semantic-ui-react'
import MainMenu from './mainMenu';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';


var headers = {
    
  'Authorization': "bearer" +" "+ localStorage.getItem('token') 
}

const NetSchemes = [
    { key: 'a', text: 'Peace', value: 'Peace' },
    { key: 'b', text: 'War', value: 'War' },
    { key: 'c', text: 'Emergency', value: 'Emergency' },
    { key: 'd', text: 'Threat Level 1', value: 'Threat Level 1' },
    { key: 'e', text: 'Threat Level 2', value: 'Threat Level 2' },
    { key: 'f', text: 'Threat Level 3', value: 'Threat Level 3' },
    { key: 'g', text: 'Threat Level 4', value: 'Threat Level 4' },
  ]

const NetType = [
    {text: 'Simplex', value: 'Simplex' },
    {text: 'Half-Duplex', value: 'Half-Duplex' },
    {text: 'Full-Duplex', value: 'Full-Duplex' },
]

const Service = [
    {text: 'Voice', value: 'Voice'},
    {text: 'Data', value: 'Data'},
]
const ComMode = [
    {text: 'Fixed', value: 'Fixed'},
    {text: 'ALE', value: 'ALE'},
    {text: '3G', value: '3G'},
    {text: 'HOP', value: 'HOP'},
    {text: 'etc', value: 'etc'},
]
 const deployment = [
     {text: 'MP', value: 'MP'},
     {text: 'Vehicle', value: 'Vehicle'},
     {text: 'Base', value: 'Base'},
 ]

 const location = [
   {text: 'Lat/Long', value: 'lat/long'},
   {text: 'Area(Geo-Fencing)', value: 'area'}
 ]
export default class Network extends React.Component {
  state = {
    location: null,
    long: null,
    lat: null,
    area: null
  }
  handleSelect = (e, { name, value }) => {
      this.setState({
        [name] : value
      })
  }
  handleSelectSubmit = () => {
    Axios.post('http://localhost:4000/network', this.state, {headers})
    .then((res) => {
     if(res.data == 'save'){
       this.setState({
          redirect: true   
       })
     }
     else{
       console.log('error')
     }
    })
  }
  render(){
    return(
        
          <>
          {this.state.redirect && (
            <Redirect to = '/config' />
          )}
          <MainMenu/>
          <Container>
              <Segment>
          <Form size = 'huge'>
              <Form.Select
              fluid
              name = 'networkschemes'
              label = 'Network Schemes'
              options = {NetSchemes}
              placeholder = 'Scheme'
              onChange = {this.handleSelect}
              
              />
            <Form.Input
              fluid
              name='networkpriority'
              label='Network Priority'
              type = 'text'
              placeholder='Groups and Sharing'
              onChange = {this.handleSelect}
              />
              <Form.Select
              fluid
              name='netType'
              label='Network Type'
              options={NetType}
              onChange = {this.handleSelect}
              />
              <Form.Select
              fluid
              name='service'
              label='Service'
              options={Service}
              onChange = {this.handleSelect}
              />
              <Form.Select
              fluid
              name='comMode'
              label='Communication Mode'
              options={ComMode}
              onChange = {this.handleSelect}
              />
              <br/>
             <center><h2>Nodes</h2></center>
             <br/>
              <Form.Input
              fluid
              name="radio"
              label="Radio Set"
              type="text"
              onChange = {this.handleSelect}
              />
              <Form.Input
              fluid
              name="antenna"
              label="Antenna"
              type="text"
              onChange = {this.handleSelect}
              />
              <Form.Select
              fluid
              name="deployment"
              label="Deployment"
              options={deployment}
              onChange = {this.handleSelect}
              />
              <Form.Select
              fluid
              name="location"
              label="Location"
              options={location}
              onChange = {this.handleSelect}
              />
              {this.state.location === 'lat/long' && (
                <div>
                <Form.Input
                fluid
                name="lat"
                label="Latitude"
                type = 'text'
                onChange = {this.handleSelect}
                />
                <Form.Input
                fluid
                name="long"
                label="Longitude"
                type = 'text'
                onChange = {this.handleSelect}
                />
                </div>
              ) }
              {this.state.location === 'area' && (
                
                  <Form.Input
                  fluid
                  name="area"
                  label="Area"
                  type = 'text'
                  onChange = {this.handleSelect}
                  />
                
              )}
            <Button positive size ='huge' onClick={this.handleSelectSubmit}>
              Submit
            </Button>
          </Form>
          </Segment>
          </Container>
          </>
        
          )
  }
  

}