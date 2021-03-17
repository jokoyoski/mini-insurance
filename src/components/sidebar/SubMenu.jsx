
import { Link } from 'react-router-dom';
import React, { useState ,useRef} from 'react';
import '../sidebar/side-menu.styles.scss';

export const SubMenu = (props) => {
    const [subNavStatus, setSubNav] = useState(false);
    const [height,setHeightState]=useState("0px")
    const showSubNav = () => {
        setHeightState(
            height === "0px" ? `${content.current.scrollHeight}px` : "0px"
          );
    }
    const content = useRef(null);
    const { item, title, subNav, icon, ...otherProps } = props;
    return (
        <div>
            <div className='menu-bar' style={{ display: 'flex', fontFamily: 'Muli', cursor: 'pointer', color: 'white', fontSize: '0.9rem', marginTop: '0.4rem', padding: '8px' }} onClick={(e) => {
                e.preventDefault();
                showSubNav()
            }}>
                <span>{icon}</span>
                <span style={{ display: 'inline-block', marginLeft: '3px' }}>{title}</span>
            </div>
            <div   ref={content}  style={{ maxHeight: `${height}`,overflowX:'hidden', transition: `max-height 0.5s`}}>
                {subNav.map((item, index) => {
                   return <Link className='side-bar-link' to={item.path} key={item.index}>
                        <span className='side-bar-label'>{item.title}</span>
                    </Link>
                })}
            </div>

        </div>
    )
}
export default SubMenu;