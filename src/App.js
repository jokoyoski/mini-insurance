
import React from 'react';
import { Column, Row } from 'simple-flexbox';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import ContentComponent from './components/dashboard/overview/ContentComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ProfileComponent } from './components/profile/ProfileComponent';
import SubscriptionComponent from './components/subscription/SubscriptionComponent';
import { BookingComponent } from './components/bookings/BookingComponent';
import VehicleListComponent from './components/vechicle/vehicle-list/VehicleListComponent';
import MessageComponent from './components/messages/MessageComponent';
import AutoShopComponent from './components/autoshop/AutoShopComponent';
import { UserSideBarComponent } from './components/user/user-side-bar/UserSideBarComponent';
import UserComponent from './components/user/user-router/UserComponent';
class App extends React.Component {

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

            <Router>
                <Row className='side-container'>
                    <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                    <Column flexGrow={1}>
                        <HeaderComponent title={selectedItem} />
                        <Switch>
                            <div className='content'>
                                <Route exact path='/' component={ContentComponent} />
                                <Route path="/user" component={UserComponent} />
                                <Route path="/overview/profile" exact component={ProfileComponent} />
                                <Route path="/overview/plans" exact component={SubscriptionComponent} />
                                <Route path="/overview/bookings" exact component={BookingComponent} />
                                <Route path="/overview/vehicles" exact component={VehicleListComponent} />
                                <Route path="/overview/messages" exact component={MessageComponent} />
                                <Route path="/overview/autoshop" exact component={AutoShopComponent} />
                            </div>
                        </Switch>
                    </Column>
                </Row>
            </Router>
        );
    }
}

export default App;
