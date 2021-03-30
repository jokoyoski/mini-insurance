import React from 'react'
import useForm from '../../../formData/useForm';
import validate from '../../../formData/validate';
import Input from '../../Input/InputCompnent';
import './addprofile.styles.scss';
import SidebarComponent from '../../sidebar/SidebarComponent';
import { Column, Row } from 'simple-flexbox';
import HeaderComponent from '../../header/HeaderComponent';
import UserSideBarComponent from '../user-side-bar/UserSideBarComponent';


import CarPic from '../../../assets/images/car-pic.jpeg';
const initialState = {
    name: {
        value: '',
        required: true
    },
    lastname: {
        value: '',
        required: true
    },
    email: {
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
    datecreated: {
        value: '',
        required: true
    },


}
export const AddProfileComponent = () => {
    const { formData, errors, changeHandler, setErrors } = useForm(initialState, validate);

    const submitHandler = (e) => {
        e.preventDefault();
        let formErrors = validate(formData, true);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            const data = new FormData();
            data.append('name', formData.name.value);
            console.log('form can be submitted now...');
            for (let pair of data.entries()) {
                console.log(`${pair[0]}: ${pair[1]}`);
            }
        }
        console.log(formData.name.value)
    }
    return (
        <>
            <Row className='side-container'>
                <SidebarComponent />
                <Column flexGrow={1}>
                    <HeaderComponent />
                    <div className='main-section'>
                        <p className='profile-page'>Profile Page</p>
                        <div className='arrange'>
                            <div className='profile-area'>
                                <UserSideBarComponent />
                            </div>
                            <div className="add-profile-container">
                        <div style={{ backgroundColor: 'white' }} className='form-section'>
                            <form className="form" onSubmit={submitHandler}>
                                <p style={{padding:'20px 10px 0px 10px'}} className='subscription-history-label profile-page-area'>My Profile</p>
                                <div className='row-form'>
                                    <Input
                                        label="First Name"
                                        name="name"
                                       
                                        id="name"
                                        value={formData.name.value}
                                        onChange={changeHandler}
                                        error={errors.name}
                                    />
                                    <Input
                                        label="Last Name"
                                        name="lastname"
                                      
                                        id="name"
                                        value={formData.lastname.value}
                                        onChange={changeHandler}
                                        error={errors.lastname}
                                    />
                                </div>
                                <div className='row-form'>
                                    <Input
                                        label="Email"
                                        
                                        name="email"
                                        id="name"
                                        value={formData.email.value}
                                        onChange={changeHandler}
                                        error={errors.email}
                                    />
                                    <Input
                                        label="Phone Number"
                                        name="phonenumber"
                                       
                                        id="name"
                                        value={formData.phonenumber.value}
                                        onChange={changeHandler}
                                        error={errors.phonenumber}
                                    />
                                </div>

                                <div className='row-form'>
                                    <Input
                                        label="Address"
                                        name="address"
                                       
                                        id="name"
                                        value={formData.address.value}
                                        onChange={changeHandler}
                                        error={errors.address}
                                    />
                                    <Input
                                        label="State"
                                        name="state"
                                        id="state"
            
                                        value={formData.state.value}
                                        onChange={changeHandler}
                                        error={errors.state}
                                    />
                                </div>
                                <div className='row-form'>
                                    <Input
                                        label="Status"
                                        name="status"
                                        id="status"
                                       
                                        value={formData.status.value}
                                        onChange={changeHandler}
                                        error={errors.statuss}
                                    />
                                    <Input
                                        label="Date Created"
                                        name="datecreated"
                                        id="datecreated"
                                        value={formData.datecreated.value}
                                        onChange={changeHandler}
                                        error={errors.datecreate}
                                    />
                                </div>
                                <div className='row-form-last'>
                                    <Input
                                        label="Subscription Plan"
                                        name="subscriptionplan"
                                        id="subscriptionplan"
                                        value={formData.status.value}
                                        onChange={changeHandler}
                                        error={errors.statuss}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                        </div>
                    </div>


                </Column>
            </Row>
        </>
    )
}

export default AddProfileComponent