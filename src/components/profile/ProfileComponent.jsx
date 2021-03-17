/*import React from 'react'
import Input from '../Input/InputCompnent';
import Button from '../Button/ButtonComponent';
import useForm from '../Utilities/UseForm';
import validate from '../Utilities/Validate';
import { Form, Field } from "react-final-form";
import Input from '../Input/InputCompnent';

const initialState = {
    name: {
        value: '',
        required: true
    },
    lastname: {
        value: '',
        required: true
    },
    phonenumber: {
        value: '',
        required: true
    },
    address: {
        value: '',
        required: true
    },
    state: {
        value: '',
        required: true
    },
    status: {
        value: '',
        required: true
    },
    email: {
        value: '',
        required: true,
        requiredMessage: 'Email address is required!',
        email: true,
        emailMessage: 'Email address is not valid!'
    },
}

const onSubmit = (values) => {
    console.log("values: ", values);
};


export const ProfileComponent = () => {
    const {formData,error,changeHandler,setErrors}=useForm(initialState,validate)
    const submitHandler = (e) => {
        e.preventDefault();
        let newErrors = validate(formData, true);
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0) {
          const data = new FormData();
          data.append('name', formData.name.value);
          data.append('firstname', formData.firstname.value);
          data.append('email', formData.email.value);
          data.append('phonenumber', formData.phonenumber.value);
          data.append('address', formData.address.value);
          data.append('state', formData.state.value);
          data.append('status', formData.status.value);
          data.append('terms', formData.terms.value);
          console.log('form can be submitted...');
          for(let pair of data.entries()) {
            console.log(`${pair[0]}:`, pair[1]);
          }
        }
      }
    return (
        <div className='container'>
            <form className="form" onSubmit={submitHandler}>
                <Input value={formData.name.value} onChange={changeHandler} error={errors.name} label='First Name' name="name" id="name" />
                <Input value={formData.lastname.value}  onChange={changeHandler} error={errors.lastname}  label='Last Name' name="lastname" id="astname" />
                <Input value={formData.email.value}  onChange={changeHandler} error={errors.email} label='Email' name="email" id="email" />
                <Input value={formData.phonenumber.value}  onChange={changeHandler} error={errors.phonenumber} label='Phone Number' name="phonenumber" id="phonenumber" />
                <Input value={formData.address.value}  onChange={changeHandler} error={errors.address} label='Address' name="address" id="address" />
                <Input value={formData.state.value}  onChange={changeHandler} error={errors.state} label='State' name="state" id="state" />
                <Input value={formData.status.value}  onChange={changeHandler} error={errors.status} label='Status' name="status" id="status" />
                <Input label='Date Created' name="dateCreated" id="dateCreated" />
                <Button type="submit" title="submit" />


            </form>


        </div>
    )
}

export default ProfileComponent */