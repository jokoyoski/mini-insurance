import React from 'react';
import CarPic from '../../../assets/images/car-pic.jpeg';
import '../user-side-bar/user-side-bar.styles.scss';

export const UserSideBarComponent = () => {
    return (
        <div>
              <div className='profile-section'>
                    <div className='pic-section'>
                      <img style={{width:'120px',height:'120px',border:'2px solid orange',borderRadius:'50%'}}  src={CarPic}/>
                        <p  style={{marginBottom:'0'}}>Adeola Oladeinde</p>
                        <p>Account No: 2208497310</p>
                        <button  className='submit-button'>Upload</button>
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
        </div>
    )
}

export default UserSideBarComponent