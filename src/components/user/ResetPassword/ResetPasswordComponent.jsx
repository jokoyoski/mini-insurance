import React from 'react'
import useForm from '../../../formData/useForm';
import validate from '../../../formData/validate';
import Input from '../../Input/InputCompnent';
import './reset-password.scss';
import SidebarComponent from '../../sidebar/SidebarComponent';
import { Column, Row } from 'simple-flexbox';
import HeaderComponent from '../../header/HeaderComponent';
import UserSideBarComponent from '../user-side-bar/UserSideBarComponent';


import CarPic from '../../../assets/images/car-pic.jpeg';
const initialState = {
    oldpassword: {
        value: '',
        required: true
    },
    newpassword: {
        value: '',
        required: true
    },
    confirmpassword: {
        value: '',
        required: true
    }


}
export const ResetPasswordComponent = () => {
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
        console.log(formData.confirmpassword.value)
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
                            <p style={{padding:'20px 10px 0px 20px'}} className='reset-profile-page'>Reset Password</p>
                            <form className="form" onSubmit={submitHandler}>
                                <Input
                                    label="Old Password"
                                    name="oldpassword"
                                    id="oldpassword"
                                    value={formData.oldpassword.value}
                                    onChange={changeHandler}
                                    error={errors.oldpassword}
                                />
                                <Input
                                    label="New Password"
                                    name="newpassword"
                                    id="newpassword"
                                    value={formData.newpassword.value}
                                    onChange={changeHandler}
                                    error={errors.newpassword}
                                />
                                <Input
                                    label="Confirm Password"
                                    name="confirmpassword"
                                    id="confirmpassword"
                                    value={formData.confirmpassword.value}
                                    onChange={changeHandler}
                                    error={errors.confirmpassword}
                                />
                                <button style={{ marginLeft: '20px' }} className='submit-button'>Update</button>
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

export default ResetPasswordComponent