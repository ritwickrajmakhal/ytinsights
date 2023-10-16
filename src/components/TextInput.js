import React from "react";
import PropTypes from 'prop-types'

export default function TextInput(props) {
    return (
        <div className="mb-3">
            <label htmlFor={props.label.replace(/ /g, '')} className="form-label text-light">
                {props.label}
            </label>
            <input
                type={props.type}
                value={props.value}
                onChange={(event) => props.changeHandler(event.target.value)}
                required
                className="form-control"
                id={props.label.replace(/ /g, '')} // Remove spaces from label
                aria-describedby="emailHelp"
                placeholder={props.placeholder}
            />
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    changeHandler: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}