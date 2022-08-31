import axios from 'axios'
import React,{useState} from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import {API_URL} from '../Constants/URL'
import {useNavigate} from 'react-router-dom'

function Create() {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [checked, setChecked]   = useState('false');
const navigate = useNavigate();

const postData = async () => {

    await axios.post( API_URL, {
        firstName,
        lastName,
        checked
    })
    
    navigate('/read');
}

  return (
    <Form className="form">
        <Form.Field>
            <label>First Name</label>
            <input 
               onChange={ event => setFirstName(event.target.value) }
               value={firstName} 
               placeholder='Enter First name'/>
        </Form.Field>
        <br/>
        <Form.Field>
            <label>Last Name</label>
            <input 
            onChange={ event => setLastName(event.target.value) }
            value={lastName}  placeholder='Last First name'/>
        </Form.Field>
        <br/>
        <Form.Field>
            <Checkbox checked={checked}
            onChange={ () => setChecked(!checked) }
            label='Agree the Terms & Conditions'/>
        </Form.Field>
        <br/>
        <br/>
         <Button onClick={postData}>Submit</Button>
    </Form>
  )
}

export default Create
