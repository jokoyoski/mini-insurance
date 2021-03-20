import React from 'react'
import useForm from '../../../formData/useForm';
import validate from '../../../formData/validate';
import Input from '../../../components/Input/InputCompnent';
import '../ResetPassword/reset-password.scss';
import  CarPic from '../../../assets/images/car-pic.jpeg';
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
        <div style={{ backgroundColor: '#fff2e5' }} className="add-profile-container">
            <p className='subscription-history-label'>Profile Page</p>
            <div className='arrange'>
                <div className='profile-section'>
                    <div className='pic-section'>
                      <img style={{width:'120px',height:'120px',border:'2px solid orange',borderRadius:'50%'}}  src={CarPic}/>
                        <p style={{marginTop:'20px'}}>Adeola Oladeinde</p>
                        <p style={{marginTop:'10px'}}>Account No: 2208497310</p>
                        <button style={{marginTop:'20px'}} className='submit-button'>Upload</button>
                    </div>
                    <div className='navigation-section'>
                        <div style={{ display: 'flex', marginTop: '25px', paddingLeft: '15px' }}>
                            <p className><i class="far fa-user-circle"></i></p>
                            <p style={{paddingLeft:'10px'}}>My Profile</p>
                        </div>
                        <div style={{ display: 'flex', marginTop: '25px', paddingLeft: '15px' }}>
                            <p className><i class="far fa-edit"></i></p>
                            <p style={{paddingLeft:'10px'}}>Edit Profile</p>
                        </div>
                        <div style={{ display: 'flex', marginTop: '25px', paddingLeft: '15px' }}>
                            <p className><i class="fas fa-lock"></i></p>
                            <p style={{paddingLeft:'10px'}}>Reset Password</p>
                        </div>
                        <div style={{ display: 'flex', marginTop: '25px', paddingLeft: '15px' }}>
                            <p className><i class="fas fa-car"></i></p>
                            <p style={{paddingLeft:'10px'}}>Manage My Vehicles</p>
                        </div>
                        <div style={{ display: 'flex', marginTop: '25px', paddingLeft: '15px' }}>
                        <p className><i class="fas fa-sign-out-alt"></i></p>
                            <p style={{paddingLeft:'10px'}}>Logout</p>
                        </div>

                    </div>
                </div>
                <div style={{ backgroundColor: 'white' }} className='form-section'>
                    <form style={{ fontFamily: 'Muli' }} className="form" onSubmit={submitHandler}>
                        <p className='subscription-history-label'>Reset Password</p>
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
                              <button style={{marginLeft:'20px'}} className='submit-button'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordComponent