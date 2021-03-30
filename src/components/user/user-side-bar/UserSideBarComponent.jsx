import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router';
import CarPic from '../../../assets/images/car-pic.jpeg';
import '../user-side-bar/user-side-bar.styles.scss';
import history from '../../../router/browserrouter';


export const UserSideBarComponent = () => {

    const [ path, setPath ] = useState('')
    useEffect(() => {

      setPath(history.location.pathname)
    }, [])
  
    const handleDropDownActionClick = (url) => {
      if (url == 'sign-in') {
        localStorage.clear()
        history.push('/sign-in')
      } else {
        console.log(url)
        history.push(`${url}`)
      }    
    }
  
    return (
        <div>
              <div className='profile-section'>
                    <div className='pic-section'>
                      <img style={{width:'120px',height:'120px',border:'2px solid orange',borderRadius:'50%'}}  src={CarPic}/>
                        <p  style={{marginBottom:'0',fontWeight:'600',fontSize:'0.8rem',marginTop:'10px'}}>Adeola Oladeinde</p>
                        <p style={{fontSize:'0.8rem' ,marginTop:'10px'}}>Account No: 2208497310</p>
                        <button  className='submit-button'>Upload</button>
                    </div>
                    <div className='navigation-section'>
                    <div onClick={() => handleDropDownActionClick('/user/addprofile')} style={{ display: 'flex', marginTop: '25px', paddingLeft: '15px',cursor:'pointer' }}>
                            <p className={path === '/user/addprofile' ? 'active' : ''}><i class="far fa-user-circle"></i></p>
                            <p className={path === '/user/addprofile' ? 'active' : ''} style={{paddingLeft:'10px'}}>My Profile</p>
                        </div>
                        <div className={path === '/user/addprofile' ? 'active' : ''} onClick={() => handleDropDownActionClick('/user/addprofile')} style={{ display: 'flex', marginTop: '25px', paddingLeft: '15px',cursor:'pointer' }}>
                            <p className><i class="far fa-edit"></i></p>
                            <p style={{paddingLeft:'10px'}}>Edit Profile</p>
                        </div>
                        <div className={path === '/user/resetpassword' ? 'active' : ''} onClick={() => handleDropDownActionClick('/user/resetpassword')} style={{ display: 'flex', marginTop: '25px', paddingLeft: '15px',cursor:'pointer' }}>
                            <p className={path === '/user/resetpassword' ? 'active' : ''}><i class="fas fa-lock"></i></p>
                            <p className={path === '/user/resetpassword' ? 'active' : ''} style={{paddingLeft:'10px'}}>Reset Password</p>
                        </div>
                        <div  onClick={() => handleDropDownActionClick('/user/managevehicle')} style={{ display: 'flex', marginTop: '25px', paddingLeft: '15px',cursor:'pointer' }}>
                            <p className={path === '/user/managevehicle' ? 'active' : ''}><i class="fas fa-car"></i></p>
                            <p className={path === '/user/managevehicle' ? 'active' : ''} style={{paddingLeft:'10px'}}>Manage My Vehicles</p>
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

export default withRouter(UserSideBarComponent)