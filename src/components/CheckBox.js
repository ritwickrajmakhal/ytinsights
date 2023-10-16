import React from 'react'
import PropTypes from 'prop-types'

export default function CheckBox(props) {
    return (
        <div className="form-check form-check-inline mb-3">
            <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                onChange={(event)=>props.changeHandler(event.target.checked)}
                checked={props.value}
            />
            <label
                className="form-check-label text-light"
                htmlFor="inlineCheckbox1"
            >
                {props.label}
            </label>
        </div>
    )
}

CheckBox.propsTypes={
    value:PropTypes.bool.isRequired,        
    changeHandler:PropTypes.func.isRequired,
    label:PropTypes.string.isRequired,
}