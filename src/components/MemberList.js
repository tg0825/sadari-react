import React from 'react'
import PropTypes from 'prop-types'

class MemberList extends React.Component {
    render () {
        const mapToMemberData = (data) => {
            return data.map((v, i) => {
                return (
                    <div
                        className={`member-list member ceo ${v.exception ? ' is_disable' : ''}`}
                        style={{backgroundImage: "url()"}}
                        key={i}
                        data-key={i}
                        onClick={this.props.onException}
                    >
                        <span className="name">{v.name}</span>
                        <span className="team">{v.team}</span>
                    </div>
                )
            });
        }

        const currentMember = () => {
            let i = 0;
            this.props.memberData.forEach((v) => {
                v.exception ? false : i += 1;
            })
            return i;
        }

        return (
            <div className="member-list wrap">
                <div className="member-list body">
                    {mapToMemberData(this.props.memberData)}
                </div>
                <div className="member-list number">
                    {currentMember()}
                    /
                    {this.props.memberData.length}
                </div>
            </div>
        );
    }
}

MemberList.propTypes = {
    memberData: PropTypes.array,
}

export default MemberList;
