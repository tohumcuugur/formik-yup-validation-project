import { useField } from 'formik'
import React, { Fragment } from 'react'

function CustomSelect({ label, ...props }) {
    const [field, meta] = useField(props);
    // console.log(field, meta);
    return (
        <Fragment>
            <label>{label}</label>
            <select
                {...field}
                {...props}
                className={meta.error ? "input-error" : ""} />

            {meta.error && <p>{meta.error}</p>}
        </Fragment>
    )
}

export default CustomSelect;