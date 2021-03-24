import React, { Component } from 'react'
import './vehicle.styles.scss';
import Car from '../../../assets/images/car-pic.jpeg';
import Pagination from '../../pagination/pagination';
import VehicleData from '../../../assets/mocks/Vehicles_DATA.json'


class VehicleListComponent extends Component {
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
        const { allRecords, currentRecords} = this.state;
        const totalRecords = allRecords.length;
        if (totalRecords === 0) return null;

        return (
            <div style={{ backgroundColor: '#fff2e5', height: '100vh', overflowX: 'scroll' }}>
                <p className='my-bookings'>My Bookings</p>
                <div  className="w-100  d-flex flex-row flex-wrap align-items-center justify-content-between">
                        <div style={{margin:'0 auto'}} className="d-flex flex-row py-4 align-items-center">
                            <Pagination totalRecords={totalRecords} pageLimit={9} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                        </div>
                    </div>
                <div style={{ backgroundColor: 'white', width: '90%', margin: '0 auto' ,marginBottom:'50px' }}>
                <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Plate Number</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRecords.map(record => {
                                    return (
                                        <tr>
                                            <td style={{fontSize:'0.7rem'}}  data-label="Subscription ID">{record.id}</td>
                                            <td style={{fontSize:'0.7rem'}} data-label="Picture"><img src={Car} style={{width:'70px'}} alt="car"/></td>
                                            <td style={{fontSize:'0.7rem'}} data-label="Date">{record.vehicle_name}</td>
                                            <td style={{fontSize:'0.7rem'}} data-label="Due Date">{record.vehicle_number}</td>
                                            <td style={{fontSize:'0.7rem'}} data-label="Status">{record.vehicle_status}</td>
                                            <td style={{fontSize:'0.7rem'}} data-label="Update"> <a href="#" class="update-button">Update</a></td>
                                            <td style={{fontSize:'0.7rem'}} data-label="Remove"><a style={{ color: 'orange' }}>Remove</a></td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}


export default VehicleListComponent