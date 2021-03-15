import React from 'react'
import './booking.styles.scss';

export const BookingComponent = () => {
    return (
        <div style={{ backgroundColor: '#fff2e5', height: '600px' }}>
            <p className='my-bookings'>My Bookings</p>
            <div style={{ backgroundColor: 'white', width: '90%', margin: '0 auto' }}>
                <table style={{ width: '90%', borderCollapse: 'collapse', fontFamily: 'Muli', margin: '0 auto' }}>

                    <tbody>
                        <tr>
                            <th>BookingId</th>
                            <th>Service</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Status</th>

                        </tr>
                        <tr>
                            <td>1234567890</td>
                            <td>Road Side Repair</td>
                            <td>Ajah</td>
                            <td>1st March 2021</td>
                            <td> <a href="#" class="table-button">Activate</a></td>
                        </tr>
                        <tr>
                            <td>1234567890</td>
                            <td>Road Side Repair</td>
                            <td>Ajah</td>
                            <td>1st March 2021</td>
                            <td> <a href="#" class="table-button">Activate</a></td>
                        </tr>
                        <tr>
                            <td>1234567890</td>
                            <td>Road Side Repair</td>
                            <td>Ajah</td>
                            <td>1st March 2021</td>
                            <td> <a href="#" class="table-button">Activate</a></td>
                        </tr>
                        <tr>
                            <td>1234567890</td>
                            <td>Road Side Repair</td>
                            <td>Ajah</td>
                            <td>1st March 2021</td>
                            <td> <a href="#" class="table-button">Activate</a></td>
                        </tr>
                    </tbody>

                </table>
            </div>


        </div>
    )
}
