import React from 'react'

export const renderField = ({
    input,
    label,
    type,
    className,
    icon,
    meta: { touched, error, warning }
}) => (
    <div className="ui left icon input">
        <input {...input} placeholder={label} type={type} className={className} />
        {touched &&
            ((error && <span className="ui red pointing below basic label">{error}</span>) ||
                (warning && <span className="ui yellow pointing below basic label">{warning}</span>))}
        <i aria-hidden="true" className={icon}></i>
    </div>
)