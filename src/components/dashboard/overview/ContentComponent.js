import React from 'react';
import { StyleSheet} from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';


const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
        }
    }
});

function ContentComponent() {
    return (
        <div style={{ backgroundColor: '#fff2e5' ,height:'600px', overflowX:'scroll' }}  >
            <div className='card-section'>
                <div className='inner-card-section'>
                    <div className='inner-top-text' style={{ display: 'flex', width: '50%' }}>
                        <p style={{ marginTop: '12px', marginRight: '7px' }} className='dot'></p>
                        <p style={{color: 'black', fontWeight: '900', lineHeight: '40px', fontSize: '1.0rem' }} >₦5000</p>
                    </div>
                    <p style={{ color: 'gray', fontWeight: '200', lineHeight: '40px', fontSize: '0.8rem' }} >Available Balance</p>
                </div>
                <div className='inner-card-section'>
                    <div className='inner-top-text' style={{ display: 'flex', width: '50%' }}>
                        <p style={{ marginTop: '12px', marginRight: '7px' }} className='dot'></p>
                        <p style={{color: 'black', fontWeight: '900', lineHeight: '40px', fontSize: '1.0rem' }} >1st Nov. 2020</p>
                    </div>
                    <p style={{  color: 'gray', fontWeight: '200', lineHeight: '40px', fontSize: '0.8rem' }} >Next Subscription Payment</p>

                </div>
                <div className='inner-card-section'>
                    <div className='inner-top-text' style={{ display: 'flex', width: '50%' }}>
                        <p style={{ marginTop: '12px', marginRight: '7px' }} className='dot'></p>
                        <p style={{ color: 'black', fontWeight: '900', lineHeight: '40px', fontSize: '1.0rem' }} >50</p>

                    </div>
                    <p style={{ color: 'gray', fontWeight: '200', lineHeight: '40px', fontSize: '0.8rem' }} >Remaining Days</p>

                </div>
                <div className='inner-card-section'>
                    <div className='inner-top-text' style={{ display: 'flex', width: '50%' }}>
                        <p style={{ marginTop: '12px', marginRight: '7px' }} className='dot'></p>
                        <p style={{  color: 'black', fontWeight: '900', lineHeight: '40px', fontSize: '1.0rem' }} >50</p>
                    </div>
                    <p style={{color: 'gray', fontWeight: '200', lineHeight: '40px', fontSize: '0.8rem' }} >Orders</p>
                </div>

            </div>

            <div className='master-card-transaction-history'>
                <div className='master-card'>

                </div>
                <div className='transaction-history'>
                    <div className='transaction-history-see-all'>
                        <p style={{color:'#414042',fontWeight:'600'}}>Transaction history</p>
                        <p style={{ color: '#696A7D' ,fontSize:'0.7rem' }}>See All</p>
                    </div>
                    <div className='trans-history-list'>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga Melantia</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>
                        <div className='trans-history'>
                            <div className='name-picture'>
                                <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
                                <div className='name-address'>
                                    <p style={{fontWeight:'900',marginBottom:'0px'}}>Jokoyoski Makanga</p>
                                    <p>01 Nov. 2022</p>
                                </div>
                            </div>
                            <div className='history'>
                                <div className='history-type'>
                                    <p  style={{marginBottom:'0px'}}>₦3222,00</p>
                                    <p>Subscription Payment</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>

    );
}

export default ContentComponent;