import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import IconSearch from '../../assets/icons/icon-search';
import IconBellNew from '../../assets/icons/icon-bell-new';
import './header.styles.scss';

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;
    return (
        <Row  style={{height:'60px',backgroundColor:'white'}} vertical="center" horizontal="space-between" {...otherProps}>
            <span className='title'></span>
            <Row vertical="center">
                <div className='iconStyles'>
                    <IconSearch />
                </div>
                <div className='iconStyles'>
                    <IconBellNew />
                </div>
                <div className='seperator'></div>
                <Row vertical="center">
                    <span className='name cursor-pointer'>Adeola Oladeinde</span>
                    <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer'/>
                </Row>
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
