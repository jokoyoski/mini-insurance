/*import React from 'react'
import { setIn } from "final-form";
import { Form, Field } from "react-final-form";
import * as Yup from "yup";

const schema = Yup.object({
    favoriteFood: Yup.string().required("Required"),
});



const onSubmit = (values) => {
    console.log("values: ", values);
};


export const ProfileComponent = () => {
    return (
        <div>
            <div className='profile'>



            </div>

            <div className='form'>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="favoriteFood">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Favorite Food</label>
                                        <input {...input} type="text" placeholder="favoriteFood" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <button type="submit">submit</button>
                        </form>
                    )}
                />
            </div>
        </div>
    )
}

export default ProfileComponent*/