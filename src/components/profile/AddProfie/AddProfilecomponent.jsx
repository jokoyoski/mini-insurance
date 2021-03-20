import React from 'react'
import useForm from '../../../formData/useForm';
import validate from '../../../formData/validate';
import Input from '../../../components/Input/InputCompnent';
import '../AddProfie/addprofile.styles.scss';
import  CarPic from '../../../assets/images/car-pic.jpeg';
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
export const AddProfilecomponent = () => {
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
                        <p className='subscription-history-label'>My Profile</p>
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
                        <div className='row-form'>
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
    )
}

export default AddProfilecomponent