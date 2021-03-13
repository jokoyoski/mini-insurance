import React from 'react'
import '../subscription/subscription.styles.scss';

export const SubscriptionComponent = () => {
    return (
        <div style={{backgroundColor:'FFF2E5'}} className='subscription'>
            <div>
                <p className='subscription-packages'>Subscription Packages</p>
                <div className='package'>
                    <div className='plans'>
                        <p style={{paddingTop:'5px'}} className='fasta'>FASTA</p>
                        <div style={{ display: 'flex', textAlign: 'center', margin: '0 auto' }}>
                            <p className='amount'>₦3222,00</p>perMonth
                     </div>
                        <p>Emergency Roadside Assistnce</p>
                        <p>Car fueling</p>
                        <p>Locksmit</p>
                        <p>TyreChange</p>
                        <p>Battery JumpStart</p>
                        <a href="#" class="button">Subscribe Now</a>
                    </div>

                    <div className='plans'>
                        <p style={{paddingTop:'5px'}} className='fasta'>FASTA PLUS</p>
                        <div style={{ display: 'flex', textAlign: 'center', margin: '0 auto' }}>
                            <p className='amount'>₦8000,00</p>perMonth
                     </div>
                        <p>Emergency Roadside Assistnce</p>
                        <p>Car fueling</p>
                        <p>Locksmit</p>
                        <p>TyreChange</p>
                        <p>Battery JumpStart</p>
                        <a href="#" class="button">Subscribe Now</a>
                    </div>

                </div>
            </div>
            <div className='subscription-history'>
                <p className='subscription-history-label'>Subscription History</p>
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
    )
}

export default SubscriptionComponent