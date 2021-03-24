import React from 'react'
import useForm from '../../formData/useForm';
import validate from '../../formData/validate';
import Select from '../Select/SelectComponent';
import Input from '../Input/InputCompnent';
import '../../components/book/book.styles.scss';

const initialState = {
    location: {
        value: '',
        required: true
    },
    state: {
        value: '',
        required: true
    },
    service: {
        value: '',
        required: true
    },
    address: {
        value: '',
        required: true
    },
    landmark: {
        value: '',
        required: true
    }

}
export const BooksComponent = () => {
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
        <div className='main-book'>
            <p className='book-top'>Book</p>
            <div className='main-section'>
                <p className='books-service'>Books Service</p>
                <form style={{ width: '70%' }} className="form" onSubmit={submitHandler}>
                    <Select
                        label="Service"
                        name="service"
                        id="service"
                        options={[
                            { label: 'Select Service Needed', value: '' },
                            { label: 'Easy', value: 'easy' },
                            { label: 'Medium', value: 'medium' },
                            { label: 'Hard', value: 'hard' }
                        ]}
                        value={formData.service.value}
                        onChange={changeHandler}
                        error={errors.service}
                    />
                    <Input
                        label="Location"
                        name="location"
                        id="location"
                        value={formData.location.value}
                        onChange={changeHandler}
                        error={errors.location}
                    />
                    <Select
                        label="state"
                        name="state"
                        id="state"
                        options={[
                            { label: 'Select Your State', value: '' },
                            { label: 'Easy', value: 'easy' },
                            { label: 'Medium', value: 'medium' },
                            { label: 'Hard', value: 'hard' }
                        ]}
                        value={formData.state.value}
                        onChange={changeHandler}
                        error={errors.state}
                    />
                    <Input
                        label="Address"
                        name="address"
                        id="name"
                        value={formData.address.value}
                        onChange={changeHandler}
                        error={errors.address}
                    />
                    <Input
                        label="Land Mark"
                        name="landmark"
                        id="name"
                        value={formData.landmark.value}
                        onChange={changeHandler}
                        error={errors.landmark}
                    />
                     <button style={{marginLeft:'30px'}}  className='submit-button'>Book Now</button>
                </form>
            </div>
        </div>
    )
}

export default BooksComponent