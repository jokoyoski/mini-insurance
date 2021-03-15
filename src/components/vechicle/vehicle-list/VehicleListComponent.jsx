import React from 'react'
import './vehicle.styles.scss';
import Car from '../../../assets/images/car-pic.jpeg'

export const VehicleListComponent = () => {
    return (
        <div style={{ backgroundColor: '#fff2e5', height: '600px' ,overflowX:'scroll'}}>
            <p className='my-bookings'>My Bookings</p>
            <div style={{ backgroundColor: 'white', width: '90%', margin: '0 auto' }}>
                <table style={{ width: '90%', borderCollapse: 'collapse', fontFamily: 'Muli', margin: '0 auto' }}>

                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Plate Number</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img src={Car} style={{width:'70px'}}/></td>
                            <td>Chevrolet</td>
                            <td>3455858</td>
                            <td>Active</td>
                            <td> <a href="#" class="update-button">Update</a></td>
                            <a style={{color:'orange'}}>Remove</a>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img src={Car} style={{width:'70px'}}/></td>
                            <td>Chevrolet</td>
                            <td>3455858</td>
                            <td>Active</td>
                            <td> <a href="#" class="update-button">Update</a></td>
                            <a style={{color:'orange'}}>Remove</a>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img src={Car} style={{width:'70px'}}/></td>
                            <td>Chevrolet</td>
                            <td>3455858</td>
                            <td>Active</td>
                            <td> <a href="#" class="update-button">Update</a></td>
                            <a style={{color:'orange'}}>Remove</a>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img src={Car} style={{width:'70px'}}/></td>
                            <td>Chevrolet</td>
                            <td>3455858</td>
                            <td>Active</td>
                            <td> <a href="#" class="update-button">Update</a></td>
                            <a style={{color:'orange'}}>Remove</a>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img src={Car} style={{width:'70px'}}/></td>
                            <td>Chevrolet</td>
                            <td>3455858</td>
                            <td>Active</td>
                            <td> <a href="#" class="update-button">Update</a></td>
                            <a style={{color:'orange'}}>Remove</a>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img src={Car} style={{width:'70px'}}/></td>
                            <td>Chevrolet</td>
                            <td>3455858</td>
                            <td>Active</td>
                            <td> <a href="#" class="update-button">Update</a></td>
                            <a style={{color:'orange'}}>Remove</a>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img src={Car} style={{width:'70px'}}/></td>
                            <td>Chevrolet</td>
                            <td>3455858</td>
                            <td>Active</td>
                            <td> <a href="#" class="update-button">Update</a></td>
                            <a style={{color:'orange'}}>Remove</a>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td><img src={Car} style={{width:'70px'}}/></td>
                            <td>Chevrolet</td>
                            <td>3455858</td>
                            <td>Active</td>
                            <td> <a href="#" class="update-button">Update</a></td>
                            <a style={{color:'orange'}}>Remove</a>
                        </tr>
                    </tbody>

                </table>
            </div>


        </div>
    )
}


export default VehicleListComponent