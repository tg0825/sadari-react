import React from 'react'
import PropTypes from 'prop-types'

class MemberList extends React.Component {
    render () {
        const mapToMemberList = (data) => {
            return data.map((v, i) => {
                return (
                    <div

                        className="member-list member ceo"
                        style={{backgroundImage: "url()"}}
                        key={i}
                        onClick={this.handleClick}
                    >
                        <button
                            onClick={this.props.onRemove}
                        >button</button>
                        <span className="name">{v.name}</span>
                        <span className="team">{v.team}</span>
                        <span className="remove">x</span>
                    </div>
                )
            });
        }

        return (
            <div className="member-list wrap">
                <div className="member-list body">
                    {mapToMemberList(this.props.memberList)}
                </div>
                <div className="member-list number"></div>
            </div>
        );
    }
}

MemberList.propTypes = {
    memberList: PropTypes.array,
}

export default MemberList;
