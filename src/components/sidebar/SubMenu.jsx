
import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import '../sidebar/side-menu.styles.scss';

export const SubMenu = (props) => {
    const [height, setHeightState] = useState("0px")
    const [buttonIdsArray] = useState([
        "3", "30", "23"
    ])

    const showSubNav = (id) => {
        let i = 0;
        for (i = 0; i < buttonIdsArray.length; i++) {
            if (buttonIdsArray[i] != id) {
                console.log(buttonIdsArray[i])
                var el = document.getElementById(buttonIdsArray[i]);
                el.style.maxHeight = '0px'
            }

            if (buttonIdsArray[i] == id) {
                console.log(id)
            }
        }
        var el = document.getElementById(id);
        if (el.style.maxHeight != '0px') {
            el.style.maxHeight = '0px'
        }
        else {
            el.style.maxHeight = `${content.current.scrollHeight}px`
        }
    }
    const content = useRef(null);
    const { title, subNav, icon, id } = props;
    return (
        <div>
            <div className='menu-bar' style={{ display: 'flex', fontFamily: 'Muli', cursor: 'pointer', color: 'white', fontSize: '0.9rem', marginTop: '0.4rem', padding: '8px' }} onClick={(e) => {
                e.preventDefault();
                showSubNav(id)
            }}>
                <span>{icon}</span>
                <span style={{ display: 'inline-block', marginLeft: '3px' }}>{title}</span>
            </div>
            <div id={id} ref={content} style={{ maxHeight:'0px' ,overflowX: 'hidden', transition: `max-height 1.0s` }}>
                {subNav.map((item, index) => {

                    return <Link className='side-bar-link' to={item.path} key={item.title}>
                        <span className='side-bar-label'>{item.title}</span>
                    </Link>
                })}
            </div>

        </div>
    )
}
export default SubMenu;