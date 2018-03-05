import React from 'react'
import PropTypes from 'prop-types'
import './MemberAdd.scss';

class MemberAdd extends React.Component {
    state = {
        name: '',
        team: ''
    };

    handleKeyPress = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleClick = () => {
        if (!this.state.name || !this.state.team) return;
        this.props.onClick(this.state);
    }

    handleChange = (e) => {
        this.setState({
            team: e.target.value
        });
    }

    render () {
        return (
            <div className="MemberAdd hide">
                <div className="input-block">
                    <input
                        placeholder="이름"
                        onChange={this.handleKeyPress}
                        className="input"
                        type="text"
                    />
                </div>
                <div className="input-block">
                    <select
                        name=""
                        onChange={this.handleChange}
                        placeholder="팀을 선택해 주세요."
                    >
                        <option hidden>팀을 선택해 주세요.</option>
                        <option value="개발팀">개발팀</option>
                        <option value="작가영입팀">작가영입팀</option>
                    </select>
                </div>
                <div className="input-block">
                    <button type="button" onClick={this.handleClick}>추가</button>
                </div>
            </div>
        );
    }
}

MemberAdd.propTypes = {
    memberList: PropTypes.array
};

export default MemberAdd;
