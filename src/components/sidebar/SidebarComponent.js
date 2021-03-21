import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {SideBarData} from './SideBarData';
import IconBurger from '../../assets/icons/icon-burger';
import Logo from '../../assets/images/miniinsurance.png';
import '../sidebar/side-menu.styles.scss';
import { SubMenu } from './SubMenu';
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
        minHeight:'600px',
        maxHeight: '700px',
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        minHeight:'600px',
        maxHeight: '630px',
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
        const { history } = this.props;
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{ position: 'relative' }}>
                <Row className='mainContainer-menu' breakpoints={{ 768: css(styles.mainContainerMobile, (expanded && styles.mainContainerExpanded)) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column style={{ backgroundColor: '#F7941D', overflowX :'scroll' }} className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                        <div style={{ backgroundColor: 'white', width: '80%', marginLeft: '18px' }}>
                            <img src={Logo} />
                        </div>
                        <Column className={css(styles.menuItemList)}>
                            {SideBarData.map((value) => {
                                return <SubMenu {...value} key={value.title} />
                            }
                            )}
                        </Column>
                    </Column>
                    {(isMobile && expanded) && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}
export default withRouter(SidebarComponent);