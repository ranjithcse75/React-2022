import React, {useState, useEffect} from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../Constants/URL'

function Update() {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [id, setId]   = useState('');
const [checked, setChecked]   = useState('false');
const navigate = useNavigate();


const updateUser = async () => {
  await axios.put( API_URL + id , {
      firstName,
      lastName,
      checked
  })
  navigate('/read');
}

useEffect( ()=> {
   setId(localStorage.getItem('id'))
   setFirstName(localStorage.getItem('firstName'))
   setLastName(localStorage.getItem('lastName'))
   setChecked(localStorage.getItem('checked'))
}, [])



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
         <Button onClick={updateUser}>update</Button>
    </Form>
  )
}

export default Update
