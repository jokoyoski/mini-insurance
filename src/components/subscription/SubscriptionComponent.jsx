import React from 'react'
import '../subscription/subscription.styles.scss';

export const SubscriptionComponent = () => {
    return (
        <div style={{ backgroundColor: 'FFF2E5', height: '600px', overflowX: 'scroll' }} className='subscription'>
            <div>
                <p className='subscription-packages'>Subscription Packages</p>
                <div className='package'>
                    <div className='plans'>
                        <p style={{ paddingTop: '5px' }} className='fasta'>FASTA</p>
                        <div style={{ display: 'flex', textAlign: 'center', margin: '0 auto' }}>
                            <p className='amount'>₦500</p>perMonth
                     </div>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'240px'}}>
                            <div>
                                <p>Emergency Roadside Assistnce</p>
                                <p>Car fueling</p>
                                <p>Locksmit</p>
                                <p>TyreChange</p>
                                <p>Battery JumpStart</p>
                            </div>
                            <a href="#" style={{marginBottom:'30px'}} class="button">Subscribe Now</a>
                        </div>
                       
                    </div>

                    <div className='plans'>
                        <p style={{ paddingTop: '5px' }} className='fasta'>FASTA PLUS</p>
                        <div style={{ display: 'flex', textAlign: 'center', margin: '0 auto' }}>
                            <p className='amount'>₦1000</p>perMonth
                     </div>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'240px'}}>
                            <div>
                                <p>From Accident Scene to Auto Repair Shop</p>
                            </div>
                            <a style={{marginBottom:'30px'}} href="#" class="button">Subscribe Now</a>
                        </div>
                       
                    </div>


                </div>
            </div>
            <div className='subscription-history'>
                <p className='subscription-history-label'>Subscription History</p>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '90%', borderCollapse: 'collapse', fontFamily: 'Muli', margin: '0 auto' }}>

                        <tbody>
                            <tr>
                                <th>SubscriptionID</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Expiry Date</th>
                                <th>Status</th>

                            </tr>
                            <tr>
                                <td>1234567890</td>
                                <td>FASTA</td>
                                <td>1st March 2021</td>
                                <td>1st March 2021</td>
                                <td> <a href="#" class="table-button">Activate</a></td>
                            </tr>
                            <tr>
                                <td>1234567890</td>
                                <td>FASTA</td>
                                <td>1st March 2021</td>
                                <td>1st March 2021</td>
                                <td> <a href="#" class="table-button">Activate</a></td>
                            </tr>
                            <tr>
                                <td>1234567890</td>
                                <td>FASTA</td>
                                <td>1st March 2021</td>
                                <td>1st March 2021</td>
                                <td> <a href="#" class="table-button">Activate</a></td>
                            </tr>
                            <tr>
                                <td>1234567890</td>
                                <td>FASTA</td>
                                <td>1st March 2021</td>
                                <td>1st March 2021</td>
                                <td> <a href="#" class="table-button">Activate</a></td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    )
}

export default SubscriptionComponent