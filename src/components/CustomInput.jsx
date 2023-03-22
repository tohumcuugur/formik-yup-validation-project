import { useField } from 'formik'
import React, { Fragment } from 'react'

function CustomInput({ label, ...props }) {
    const [field, meta] = useField(props);
    // console.log(field, meta);
    return (
        <Fragment>
            <label>{label}</label>
            <input
                {...field}
                {...props}
                className={meta.error ? "input-error" : ""} />

            {meta.error && <p>{meta.error}</p>}
        </Fragment>
    )
}

export default CustomInput