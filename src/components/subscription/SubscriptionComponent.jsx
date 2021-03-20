import React, { Component } from 'react'
import '../subscription/subscription.styles.scss';
import '../pagination/pagination.styles.scss';
import VehicleData from '../../assets/mocks/Subscription_DATA.json';
import Pagination from '../../components/pagination/pagination';


class SubscriptionComponent extends Component {
    state = { allRecords: [], currentRecords: [], currentPage: null, totalPages: null }

    componentDidMount() {
        const allRecords = VehicleData;
        console.log(allRecords)
        this.setState({ allRecords });
    }

    onPageChanged = data => {
        const { allRecords } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentRecords = allRecords.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentRecords, totalPages });
    }

    render() {
        const { allRecords, currentRecords } = this.state;
        const totalRecords = allRecords.length;
        if (totalRecords === 0) return null;
        return (
            <div style={{ backgroundColor: '#FFF2E5', height: '600px', overflowX: 'scroll' }} className='subscription'>
              <div style={{margin:'0 auto',width:'95%',backgroundColor:'white'}}>
              <div>
                    <p className='subscription-packages'>Subscription Packages</p>
                    <div className='package'>
                        <div className='plans'>
                            <p style={{ paddingTop: '5px' }} className='fasta'>FASTA</p>
                            <div style={{ display: 'flex', textAlign: 'center', margin: '0 auto' }}>
                                <p className='amount'>₦500</p>perMonth
                         </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
                                <div>
                                    <p>Emergency Roadside Assistnce</p>
                                    <p>Car fueling</p>
                                    <p>Locksmit</p>
                                    <p>TyreChange</p>
                                    <p>Battery JumpStart</p>
                                </div>
                                <a href="#" style={{ marginBottom: '30px' }} class="button">Subscribe Now</a>
                            </div>

                        </div>

                        <div className='plans'>
                            <p style={{ paddingTop: '5px' }} className='fasta'>FASTA PLUS</p>
                            <div style={{ display: 'flex', textAlign: 'center', margin: '0 auto' }}>
                                <p className='amount'>₦1000</p>perMonth
                         </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '240px' }}>
                                <div>
                                    <p>From Accident Scene to Auto Repair Shop</p>
                                </div>
                                <a style={{ marginBottom: '30px' }} href="#" class="button">Subscribe Now</a>
                            </div>

                        </div>


                    </div>
                </div>
                <div className='subscription-history'>
                    <p className='subscription-history-label'>Subscription History</p>
                    <div className="row d-flex flex-row">
                        <div className="w-100  d-flex flex-row flex-wrap align-items-center justify-content-between">
                            <div style={{ margin: '0 auto' }} className="d-flex flex-row  align-items-center">
                                <Pagination totalRecords={totalRecords} pageLimit={9} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                            </div>
                        </div>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>SubscriptionID</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Expiry Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRecords.map(record => {
                                    return (
                                        <tr>
                                            <td scope="row" data-label="Subscription ID">{record.subscription_id}</td>
                                            <td data-label="Name">{record.name}</td>
                                            <td data-label="Date">{record.date}</td>
                                            <td data-label="Due Date">{record.expiry_date}</td>
                                            <td data-label="Update"> <a href="#" class="table-button">Update</a></td>
    
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>

                    </div>
                </div>
              </div>
            </div>
        )
    }

}

export default SubscriptionComponent
