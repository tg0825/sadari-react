import React from 'react'
import PropTypes from 'prop-types'

class Add extends React.Component {
    state = {
        name: '',
        team: 'dev'
    };

    handleKeyPress = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleClick = () => {
        this.props.onClick(this.state)
    }

    handleChange = (e) => {
        this.setState({
            team: e.target.value
        });
    }

    render () {
        return (
            <div>
                <div>
                    <input onChange={this.handleKeyPress} className="input" type="text"/>
                </div>
                <div>
                    <select value={this.state.team} name="" onChange={this.handleChange}>
                        <option value="dev">개발팀</option>
                        <option value="scouter">작가영입팀</option>
                    </select>
                </div>
                <div>
                    <button type="button" onClick={this.handleClick}>추가</button>
                </div>
            </div>
        );
    }
}

Add.propTypes = {
    memberList: PropTypes.array
};

export default Add;
