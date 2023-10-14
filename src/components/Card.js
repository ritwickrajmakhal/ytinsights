import React from 'react'
import PropTypes from 'prop-types'

export default function Card(props) {

    return (
        <div data-aos={props.dataAos} data-aos-duration="1000" className="card my-2">
            <div className="card-header">{props.title}</div>
            <div className="card-body">
                <p className="card-text">{props.body}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}
