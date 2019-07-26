import React from 'react'
import { Form, Input, TextArea, Button, Select, Container } from 'semantic-ui-react'
import axios from 'axios'


const RankOptions = [
  {  text: 'Lt-Gen', value: 'Lt-Gen' },
  {  text: 'Mj-Gen', value: 'Mj-Gen' },
  {  text: 'Brig', value: 'Brig' },
  {  text: 'Col', value: 'Col' },
  {  text: 'Lt-Col', value: 'Lt-Col' },
  {  text: 'Major', value: 'Mj' },
  {  text: 'Capt', value: 'Capt' },
  {  text: 'Lt', value: 'Lt' },
  {  text: '2-Lt', value: 'Lt-2' },

]

export default class Employee extends React.Component{
    state={
      rank : null,
      rankErr: false,
      PAnoErr: false,
      fnameErr: false,
      lnameErr: false,
      emailErr: false,
      passwordErr: false,
      cpasswordErr: false,
      phoneErr: false,
      cnicErr: false,
      
    }
    handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
        [name] : value
    })
    }
    validate = () => {
      
      if(this.state.rank == null){
        this.setState({
          rankErr : true
        })
      }
      else{
        this.setState({
          rankErr : false
        })
      }
     if (this.state.PAno === undefined || this.state.PAno === ''){
        this.setState({
          PAnoErr : true
        })
      }
      else {
      let pattren = /[PA]+[-]/g
      let result = this.state.PAno.match(pattren)
      if(result == null){
        this.setState({
          PAnoErr : true
        })
      }
      else{
        this.setState({
          PAnoErr : false
        })
      }
      }

      if (this.state.fname == undefined || this.state.fname == ''){
        this.setState({
          fnameErr : true
        })
      }

      if (this.state.lname == undefined || this.state.lname == ''){
        this.setState({
          lnameErr : true
        })
      }

      if (this.state.email == undefined || this.state.email == ''){
        this.setState({
          emailErr : true
        })
      }
      else {
        let pattren = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        let result = this.state.email.match(pattren)
        if(result == null){
          this.setState({
            emailErr : true
          })
        }
        else{
          this.setState({
            emailErr : false
          })
        }
      }

      if (this.state.password == undefined || this.state.password == ''){
        this.setState({
          passwordErr : true
        })
      }
     else{
      let pattren = /^.{5,}$/
      let result = this.state.password.match(pattren)
      if(result == null){
        this.setState({
          passwordErr : true
        })
      }
      else{
        this.setState({
          passwordErr : false
        })
      }
     }
      if (this.state.cpassword == undefined || this.state.cpassword == ''){
        this.setState({
          cpasswordErr : true
        })
      }
      else{
       if(this.state.cpassword === this.state.password){
         
         this.setState ({
           cpasswordErr: false
         })
       }
       else{
         
        this.setState({
          cpasswordErr: true
        })
       }
      }

      if (this.state.phone == undefined || this.state.phone == ''){
        this.setState({
          phoneErr : true
        })
      }
      else{
        let pattren = /\d{4}[-]\d{7}/
        let result = this.state.phone.match(pattren)
        if(result == null){
          this.setState({
           phoneErr: true
          })
        }
        else{
          this.setState({
            phoneErr: false
           })
        }
      }

      if (this.state.cnic == undefined || this.state.cnic == ''){
        this.setState({
          cnicErr : true
        })
      }
      else{
        let pattren = /\d{5}[-]\d{7}[-]\d{1}/
        let result = this.state.cnic.match(pattren)
        if(result == null){
          this.setState({
            cnicErr: true
          })
        }
        else{
         
            this.setState({
              cnicErr: false
            })
          }
      }
    }
    handleSubmit = () => {
      this.validate()
      if(this.state.rankErr == false &&
        this.state.PAnoErr == false &&
        this.state.fnameErr == false &&
        this.state.lnameErr == false &&
        this.state.phoneErr == false &&
        this.state.cnicErr == false &&
        this.state.emailErr == false &&
        this.state.passwordErr == false &&
        this.state.cpasswordErr == false 
        ){
          axios.post('http://localhost:4000/addUser', this.state)
          .then((res) => {
            console.log(res.data)
          })
        }
        console.log(this.state)
    }
    handlerankChange = (e, { value }) => {
    
    
     this.setState({
         rank : value
     })
    }
    render() {
        return (
            <Container>
            <Form size='huge'>
                <Form.Group widths='equal'>
                  {this.state.rankErr ? (
                    <Form.Field 
                    name = 'rank'
                    control = {Select}
                    label = 'Rank'
                    options = {RankOptions}
                    placeholder = 'Rank'
                    value = {this.state.rank}
                    onChange = {this.handlerankChange}
                    error
                    />
                  ) : (
                    <Form.Field 
                    name = 'rank'
                    control = {Select}
                    label = 'Rank'
                    options = {RankOptions}
                    placeholder = 'Rank'
                    value = {this.state.rank}
                    onChange = {this.handlerankChange}
                    />
                  )}
                    {this.state.PAnoErr ? (
                    <Form.Field 
                    name='PAno'
                    control={Input}
                    type='text'
                    label='PA-No'
                    placeholder='PA-11122'
                    value = {this.state.value}
                    onChange = {this.handleChange}
                    error
                    />  
                    ) : (
                      <Form.Field 
                      name='PAno'
                      control={Input}
                      type='text'
                      label='PA-No'
                      placeholder='PA-11122'
                      value = {this.state.value}
                      onChange = {this.handleChange}
                      />
                    )}
                    
                    </Form.Group>
                <Form.Group widths='equal'>
                  {this.state.fnameErr ? (
                <Form.Field
                name='fname'
                control={Input}
                type='text'
                label='First name' 
                placeholder='First name'
                value = {this.state.value}
                onChange = {this.handleChange}
                error
                />    
                  ) : (
                    <Form.Field
                    name='fname'
                    control={Input}
                    type='text'
                    label='First name' 
                    placeholder='First name'
                    value = {this.state.value}
                      onChange = {this.handleChange}
                  />
                  )}
                {this.state.lnameErr ? (
                <Form.Field
                name='lname'
                control={Input}
                type='text'
                label='Last name'
                placeholder='Last name'
                value = {this.state.value}
                onChange = {this.handleChange}
                error
                />  
                ) : (
                  <Form.Field
                  name='lname'
                  control={Input}
                  type='text'
                  label='Last name'
                  placeholder='Last name'
                  value = {this.state.value}
                    onChange = {this.handleChange}
                />
                )}
                
              </Form.Group>
              {this.state.emailErr ? (
              <Form.Field
              name='email'
              control={Input}
              type='email'
              label='Email'
              placeholder='email@email.com'
              value = {this.state.value}
                  onChange = {this.handleChange}
            error 
            />
              ) : (
               <Form.Field
                name='email'
                control={Input}
                type='email'
                label='Email'
                placeholder='email@email.com'
                value = {this.state.value}
                    onChange = {this.handleChange}
                />
              )}
              { this.state.passwordErr ? (
                <Form.Field
                name='password'
                control={Input}
                type='password'
                label='Password'
                placeholder="********"
                value = {this.state.value}
                    onChange = {this.handleChange}
               error
               />
              ) : (
                <Form.Field
                name='password'
                control={Input}
                type='password'
                label='Password'
                placeholder="********"
                value = {this.state.value}
                onChange = {this.handleChange}
               />
              )}
              {this.state.cpasswordErr ? (
                <Form.Field
                name='cpassword'
                type='password'
                control={Input}
                label='Confirm password'
                placeholder="********"
                value = {this.state.value}
                onChange = {this.handleChange}
                error
              />
              ) : (
                <Form.Field
                name='cpassword'
                type='password'
                control={Input}
                label='Confirm password'
                placeholder="********"
                value = {this.state.value}
                onChange = {this.handleChange}
              />
              )}
              {this.state.phoneErr ? (
                <Form.Field
                name='phone'
                type='tel'
                control={Input}
                label='Phone No'
                placeholder="xxxx-xxxxxxx"
                value = {this.state.value}
                    onChange = {this.handleChange}
              error 
              />
              ) : (
                <Form.Field
                name='phone'
                type='tel'
                control={Input}
                label='Phone No'
                placeholder="xxxx-xxxxxxx"
                value = {this.state.value}
                onChange = {this.handleChange}
              />
              )}
              {this.state.cnicErr ? (
                <Form.Field
                name='cnic'
                control={Input}
                label='CNIC'
                type='text'
                placeholder="xxxxx-xxxxxxx-x"
                value = {this.state.value}
                onChange = {this.handleChange}
                error 
                />
              ) : (
                <Form.Field
                name='cnic'
                control={Input}
                label='CNIC'
                type='text'
                placeholder="xxxxx-xxxxxxx-x"
                value = {this.state.value}
                onChange = {this.handleChange}
              />
              )}
              
              <Button primary onClick={this.handleSubmit}>Submit</Button>
            </Form>
            </Container>
        )
    }

}
    