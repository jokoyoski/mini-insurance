import React from 'react';
import useForm from '../../formData/useForm';
import validate from '../../formData/validate';
import Input from '../../components/Input/InputCompnent';
import './manage-vehicle.styles.scss';
const initialState = {
    vehicleplatenumber: {
        value: '',
        required: true
    },
    vin: {
        value: '',
        required: true
    },
    vehiclename: {
        value: '',
        required: true
    },
    vehiclemodel: {
        value: '',
        required: true
    },
    vehiclecolor: {
        value: '',
        required: true
    },
    vehiclepolicy: {
        value: '',
        required: true
    },
    landmark: {
        value: '',
        required: true
    },
    status: {
        value: '',
        required: true
    }
}
export const ManageVehicleComponent = () => {
    const { formData, errors, changeHandler, setErrors } = useForm(initialState, validate);

    const submitHandler = (e) => {
        e.preventDefault();
        let formErrors = validate(formData, true);
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            const data = new FormData();
            data.append('difficulty', formData.difficulty.value);
            console.log('form can be submitted now...');
            for (let pair of data.entries()) {
                console.log(`${pair[0]}: ${pair[1]}`);
            }
        }

    }
    return (
        <div className='manage-vehicle'>
            <div>
                <p className='manage-my-vehicle'>Manage My Vehicles</p>
                <div className='add-vehicle-section'>
                    <p style={{margin:'20px 0px 20px 20px'}}>Add Vehicle</p>
                    <div className='manage'>
                        <p style={{margin:'0 auto',padding:'15px',fontSize:'0.7rem'}}>Manage my Vehicles</p>
                </div>
                </div>
                <div className='form-section'>
                    <form style={{ width: '95%' }} className="form" onSubmit={submitHandler}>
                        <div className='form-value'>
                            <Input
                                label="Vehicle Plate Number"
                                name="location"
                                id="location"
                                placeholder="Enter Vehicle number here"
                                value={formData.vehicleplatenumber.value}
                                onChange={changeHandler}
                                error={errors.vehicleplatenumber}
                            />
                            <Input
                                label="VIN"
                                name="vin"
                                id="vin"
                                placeholder="Enter VIN here"
                                value={formData.vin.value}
                                onChange={changeHandler}
                                error={errors.vin}
                            />
                        </div>


                        <div className='form-value'>
                        <Input
                            label="Vehicle Name"
                            name="vehiclename"
                            placeholder="Enter vehicle name here"
                            id="vehiclename"
                            value={formData.vehiclename.value}
                            onChange={changeHandler}
                            error={errors.vehiclename}
                        />
                        <Input
                            label="Vehicle Model"
                            name="vehiclemodel"
                            id="vehiclemodel"
                            placeholder="Enter vehicle model here"
                            value={formData.vehiclemodel.value}
                            onChange={changeHandler}
                            error={errors.vehiclemodel}
                        />
                        </div>
                        <div className='form-value'>
                        <Input
                            label="Vehicle Color"
                            name="vehiclecolor"
                            id="vehiclecolor"
                            placeholder="Enter vehicle color here"
                            value={formData.vehiclecolor.value}
                            onChange={changeHandler}
                            error={errors.vehiclecolor}
                        />
                        <Input
                            label="Vehicle Policy"
                            name="vehiclepolicy"
                            id="vehiclepolicy"
                            placeholder="Enter vehicle policy here"
                            value={formData.vehiclepolicy.value}
                            onChange={changeHandler}
                            error={errors.vehiclepolicy}
                        />
                        </div>
                       
                        <Input
                            label="Status"
                            name="status"
                            placeholder="Choose a File"
                            id="status"
                            type="file"
                            value={formData.status.value}
                            onChange={changeHandler}
                            error={errors.status}
                        />
                        <button style={{ marginLeft: '30px' ,width:'30%'}} className='submit-button'>Add</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ManageVehicleComponent