import { useField } from 'formik'
import React, { Fragment } from 'react'

function CustomCheckbox({ label, ...props }) {
    const [field, meta] = useField(props);
    // console.log(field, meta);
    return (
        <Fragment>
            <div className='checkbox'>
                <input
                    {...field}
                    {...props}
                    className={meta.error ? "input-error" : ""} />
                <span>I am accepting the terms of use</span>
            </div>
            {meta.error && <p>{meta.error}</p>}
        </Fragment>
    )
}

export default CustomCheckbox;