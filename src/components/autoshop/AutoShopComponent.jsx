import React, { useState, useEffect } from 'react';
import '../autoshop/autoshop.styles.scss';
import Car3 from '../../assets/images/car3.jpeg';
import ServicePartData from '../../assets/mocks/ServicePart_DATA.json';
import '../paginate/paginate.styles.scss';
import CategoriesData from '../../assets/mocks/Categories_DATA.json';
import PaginationComponent from '../paginate/PaginationComponent';
import SidebarComponent from '../sidebar/SidebarComponent';
import { Column, Row } from 'simple-flexbox';
import HeaderComponent from '../header/HeaderComponent';


const AutoShopComponentTest = () => {
    const [posts, setPosts] = useState([]);
    const [active, setActive] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [buttonIdsArray] = useState([
        "button1", "button2", "button3", "button4", "button5"
    ])


    const initButton = () => {
        buttonIdsArray.forEach(button => {
            document.getElementById(button).classList.remove("active-button");
            document.getElementById(button).classList.add("inactive-button");
        });
    };

    const handleClick = id => {
        initButton();
        document.getElementById(id).classList.add("active-button");
        document.getElementById(id).classList.remove("inactive-button");
        setActive(active)
        if (id === "button1") {
            setPosts(CategoriesData)
        }
        if (id === "button2") {


        }
        if (id === "button3") {


        }
        if (id === "button4") {

        }
        if (id === "button5") {
            console.log(ServicePartData)
            setPosts(ServicePartData)
        }
    };
    // Change page

    useEffect(() => {
        setPosts(CategoriesData)
        initButton();
    }, [])
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages = Math.ceil(posts.length / postsPerPage)



    return (
        <>
        <Row className='side-container'>
                    <SidebarComponent/>
                    <Column flexGrow={1}>
                        <HeaderComponent />
            <div className='autoshop'>
                <div className='navigation-section'>
                    <div>
                        <a
                            id="button1"
                            onClick={() => handleClick("button1")}
                            className={active ? "btn-animation" : "active-animation"}
                        >Categories</a>
                        <a
                            id="button2"
                            onClick={() => handleClick("button2")}
                            className={active ? "btn-animation" : "active-animation"}
                        >Service Parts</a>
                        <a
                            id="button3"
                            onClick={() => handleClick("button3")}
                            className={active ? "btn-animation" : "active-animation"}
                        >Batteries</a>
                        <a
                            id="button4"
                            onClick={() => handleClick("button4")}
                            className={active ? "btn-animation" : "active-animation"}
                        >Accesories</a>
                        <a
                            id="button5"
                            onClick={() => handleClick("button5")}
                            className={active ? "btn-animation" : "active-animation"}
                        >AutoCare</a>
                    </div>
                </div>
                <div className='show-glass'>
                    <p className='subscription-history-label'>Top Selling Items</p>
                    <PaginationComponent pages={howManyPages} setCurrentPage={setCurrentPage} />
                    <div className='item-card-section'>
                        {
                            currentPosts.map((post) => {
                                return (

                                    <div key={post.id} className='item-card'>
                                        <div style={{ backgroundImage: `url(${Car3})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='picture-section'>
                                        </div>
                                        <div className='item-details'>
                                            <p style={{ marginBottom: '0px',color:'gray' }}>{post.item_name}</p>

                                            <div className='rating-section'>
                                                <div className='rating'>
                                                    <p></p>
                                                    <p>{post.item_amount}</p>
                                                </div>
                                                <p style={{color:'gray'}}>Stock:{post.item_stock}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
            </Column>
            </Row>
        </>

    )
}

export default AutoShopComponentTest
