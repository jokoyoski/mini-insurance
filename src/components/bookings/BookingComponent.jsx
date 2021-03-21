import React, { Component } from 'react'
import './booking.styles.scss';
import BookingsData from '../../assets/mocks/Bookings_DATA.json';
import Pagination from '../pagination/pagination';

export class BookingComponent extends Component {
    state = { allRecords: [], currentRecords: [], currentPage: null, totalPages: null }

    componentDidMount() {
        const allRecords = BookingsData;
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
            <div style={{ backgroundColor: '#fff2e5', height: '600px' }}>
                <p className='my-bookings'>My Bookings</p>
                <div className="w-100  d-flex flex-row flex-wrap align-items-center justify-content-between">
                    <div style={{ margin: '0 auto' }} className="d-flex flex-row py-4 align-items-center">
                        <Pagination totalRecords={totalRecords} pageLimit={3} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', width: '96%', margin: '0 auto' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>BookingId</th>
                                <th>Service</th>
                                <th>Location</th>
                                <th> Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRecords.map(record => {
                                return (
                                    <tr>
                                        <td style={{fontSize:'0.7rem'}} scope="row" data-label="Booking ID">{record.booking_id}</td>
                                        <td style={{fontSize:'0.7rem'}} data-label="Name">{record.service}</td>
                                        <td style={{fontSize:'0.7rem'}} data-label="Location">{record.location}</td>
                                        <td style={{fontSize:'0.7rem'}} data-label="Date">{record.date}</td>
                                        <td style={{fontSize:'0.7rem'}} data-label="Status"> <a href="#" class="table-button">Update</a></td>
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
