import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const RankOptions = [
  { key: 'o', text: 'Officer', value: 'officer' },
  { key: 'j', text: 'JOC', value: 'joc' },
]

const FormUser = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        control={Select}
        options={RankOptions}
        label={{ children: 'Rank', htmlFor: 'form-select-control-gender' }}
        placeholder='Rank'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={Input}
      label='Email'
      placeholder='email@email.com'
    />
    <Form.Field
      id='form-button-control-public'
      control={Input}
      label='password'
      placeholder="********"
    />
    <Form.Field
      
      control={Input}
      label='Confirm password'
      placeholder="********"
    />
    <Form.Field
      
      control={Input}
      label='Phone No'
      placeholder="xxxx-xxxxxxx"
    />
    <Form.Field
      
      control={Input}
      label='CNIC'
      placeholder="xxxxx-xxxxxxx-x"
    />
    <Button primary>Submit</Button>
  </Form>
)

export default FormUser