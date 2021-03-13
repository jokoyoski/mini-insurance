
import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet } from 'aphrodite';
import SidebarComponent from './components/sidebar/side-menu/SidebarComponent';
import HeaderComponent from './components/sidebar/header/HeaderComponent';
import ContentComponent from './components/dashboard/overview/ContentComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ProfileComponent } from './components/profile/ProfileComponent';
import { SubscriptionComponent } from './components/subscription/SubscriptionComponent';

const styles = StyleSheet.create({

    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

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
                <Row className='container'>
                    <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                    <Column flexGrow={1}>
                        <HeaderComponent title={selectedItem} />
                        <Switch>
                            <div className='content'>
                                <Route path="/overview/content" exact component={ContentComponent} />
                                <Route path="/overview/profile" exact component={ProfileComponent} />
                                <Route path="/overview/plans" exact component={SubscriptionComponent} />
                            </div>
                        </Switch>
                    </Column>
                </Row>
            </Router>
        );
    }
}

export default App;
