import React from 'react'
import PropTypes from 'prop-types'

class Result extends React.Component {
    render () {
        const resultMap = (data) => {
            if (!data.length) return;
            const itemResult = data.map((result, i) => (
                <div className={'member-list member ' + result.team} key={i}>
                    <span className="name"> {result.name} </span>
                    <span className="team"> {result.team} </span>
                </div>
            ))
            return (
                <div className="group item">
                    {itemResult}
                </div>
            )
        }

        return (
            <div>
                 {resultMap(this.props.resultData)}
            </div>
        )
    }
}

export default Result;
