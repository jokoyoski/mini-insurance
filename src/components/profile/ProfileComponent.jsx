import React from 'react'

import { Form, Field } from "react-final-form";




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
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="firstname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>First Name</label>
                                        <input {...input} type="text" placeholder="First Name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="firstname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>First Name</label>
                                        <input {...input} type="text" placeholder="First Name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <Field name="firstname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>First Name</label>
                                        <input {...input} type="text" placeholder="First Name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="firstname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>First Name</label>
                                        <input {...input} type="text" placeholder="First Name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <Field name="firstname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>First Name</label>
                                        <input {...input} type="text" placeholder="First Name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="firstname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>First Name</label>
                                        <input {...input} type="text" placeholder="First Name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>


                            <Field name="firstname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>First Name</label>
                                        <input {...input} type="text" placeholder="First Name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="firstname">
                                {({ input, meta }) => (
                                    <div>
                                        <label>First Name</label>
                                        <input {...input} type="text" placeholder="First Name" />
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

export default ProfileComponent