import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import MenuItemComponent from '../menu-item/MenuItemComponent';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import IconOverview from '../../../assets/icons/icon-overview.js';
import IconTickets from '../../../assets/icons/icon-tickets';
import IconIdeas from '../../../assets/icons/icon-ideas.js';
import IconContacts from '../../../assets/icons/icon-contacts';
import IconBurger from '../../../assets/icons/icon-burger';
import Logo from '../../../assets/images/miniinsurance.png';
import '../side-menu/side-menu.styles.scss';
const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 19
    },
    container: {
        backgroundColor: '#F7941D',
        width: 255,
        paddingTop: 32,
        height: 'calc(100% - 32px)'
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    mainContainerExpanded: {
        width: '100%',
        minWidth: '100vh',
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
});

class SidebarComponent extends React.Component {

    state = { expanded: false };
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    onItemClicked = (item) => {
      
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger />
        </div>
    }

    render() {
        const {history } = this.props;
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        console.log(expanded)
        return (
            <div style={{ position: 'relative' }}>
                <Row className='mainContainer-menu' breakpoints={{ 768: css(styles.mainContainerMobile, (expanded && styles.mainContainerExpanded)) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column style={{backgroundColor:'#F7941D'}} className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                       <div style={{backgroundColor:'white',width:'80%',marginLeft:'18px'}}>
                       <img src={Logo} />
                       </div>
                        <Column className={css(styles.menuItemList)}>
                            <MenuItemComponent
                                title="Account" icon={IconOverview}
                                onClick={() => history.push('/overview/content')}
                                active={this.props.selectedItem === 'Overview'}
                                
                            />
                            <MenuItemComponent
                                title="Subscriptions" icon={IconTickets}
                                onClick={() => history.push('/overview/plans')}
                                active={this.props.selectedItem === 'Tickets'}
                            />
                        </Column>
                    </Column>
                    {(isMobile && expanded)&&<div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}
export default withRouter(SidebarComponent);