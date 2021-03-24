import React, { Component } from 'react'
import { UserSideBarComponent } from '../user-side-bar/UserSideBarComponent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Column, Row } from 'simple-flexbox';
import SidebarComponent from '../../sidebar/SidebarComponent';
import HeaderComponent from '../../header/HeaderComponent';
import AddProfileComponent from '../AddProfie/AddProfilecomponent';
import './user.styles.scss';
import ResetPasswordComponent from '../ResetPassword/ResetPasswordComponent';
import ManageVehicleComponent from '../../manage-vehicles/ManageVehicleComponent';

export class UserComponent extends Component {

    state = { selectedItem: 'Tickets' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();
    render() {
        const { selectedItem } = this.state;
        return (
            <div>
                <Router>
                    <div className='main-section'>
                    <p className='profile-page'>Profile Page</p>
                        <div className='arrange'>
                            <div className='profile-area'>
                                <UserSideBarComponent />
                            </div>
                            <Switch>
                                <div className='content'>
                                    <Route path="/user/addprofile" exact component={AddProfileComponent} />
                                    <Route path="/user/resetpassword" exact component={ResetPasswordComponent} />
                                    <Route path="/user/managevehicle" exact component={ManageVehicleComponent} />
                                </div>
                            </Switch>
                        </div>

                    </div>
                </Router>
            </div>
        )
    }
}
export default UserComponent
