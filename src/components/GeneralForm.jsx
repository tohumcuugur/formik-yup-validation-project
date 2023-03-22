import React from 'react'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas';
import { Link } from 'react-router-dom';
//Formik saves us from the trouble of using features such as useState when the input in the form changes, it automatically tracks the inputs.

const onSubmit = async (values, actions) => {
    console.log(values, actions);

    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    actions.resetForm();
}

function GeneralForm() {
    const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: "",
            password: "",
            confirmPassword: "",
        },
        //isSubmitting when we click save or submit it is helping us to disable save button.
        validationSchema: basicSchema,
        onSubmit,

        //With this code all the rules that we defined in the yup"index.js" are valid here 
    });
    // console.log(formik);
    return (
        <form onSubmit={handleSubmit}>
            <div className='inputDiv'>
                <label>Email</label>
                <input
                    type="email"
                    value={values.email}
                    id="email"
                    placeholder='Enter your mail adress'
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                />
                {
                    errors.email && <p>{errors.email}</p>
                }
            </div>
            <div className='inputDiv'>
                <label>Age</label>
                <input
                    type="number"
                    value={values.age}
                    id="age"
                    placeholder='Enter your age'
                    onChange={handleChange}
                    className={errors.age ? "input-error" : ""}
                />
                {
                    errors.age && <p>{errors.age}</p>
                }
            </div>
            <div className='inputDiv'>
                <label>Password</label>
                <input type="password"
                    value={values.password}
                    id="password"
                    placeholder='Enter your mail password'
                    onChange={handleChange}
                    className={errors.password ? "input-error" : ""}
                />
                {
                    errors.password && <p>{errors.password}</p>
                }
            </div>
            <div className='inputDiv'>
                <label>Confirm Password</label>
                <input type="password"
                    value={values.confirmPassword}
                    id="confirmPassword"
                    placeholder='Enter your mail Repassword'
                    onChange={handleChange}
                    className={errors.confirmPassword ? "input-error" : ""}
                />
                {
                    errors.confirmPassword && <p>{errors.confirmPassword}</p>
                }
            </div>
            <button disabled={isSubmitting} type='submit'>Save</button>
            <Link to="/portal">Go to Portal</Link>
        </form>
    )
}


export default GeneralForm