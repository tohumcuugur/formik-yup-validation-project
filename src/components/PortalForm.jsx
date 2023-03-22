import { Form, Formik } from 'formik';
import React, { Fragment } from 'react'
import { advencedSchema } from '../schemas';
import CustomCheckbox from './CustomCheckbox';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
    // console.log(values, actions);

    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    actions.resetForm();
}

function PortalForm() {
    return (
        <Fragment>
            <Formik
                initialValues={{ username: '', university: '', isAccepted: false }}
                onSubmit={onSubmit}
                validationSchema={advencedSchema}
            >
                {
                    ({ isSubmitting }) => (
                        <Form>
                            <CustomInput
                                label="User Name"
                                name="username"
                                type="text"
                                placeholder="Enter your user name"
                            />
                            <CustomSelect
                                label="User Name"
                                name="university"
                                placeholder="Select your university"
                            >
                                <option value="">Select your university</option>
                                <option value="bogazici">Boğaziçi University</option>
                                <option value="odtu">Odtü University</option>
                                <option value="itu">İtü University</option>
                                <option value="beykent">Beykent University</option>
                            </CustomSelect>
                            <CustomCheckbox type="checkbox" name="isAccepted" />
                            <button disabled={isSubmitting} type='submit'>Save</button>
                            <Link to="/">Return Main Page</Link>
                        </Form>
                        //name values is the form must be same with the initialValues= username: '', university: '', isAccepted: false
                    )}
            </Formik>
        </Fragment>
    )
}

export default PortalForm