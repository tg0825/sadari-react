import React from 'react'
import PropTypes from 'prop-types'

class SadariSelect extends React.Component {
    shuffle (a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    handleClick () {
        const memberListClone = this.props.memberList.slice();
        this.shuffle(memberListClone);
        this.props.onClick(memberListClone);
    }

    render () {
        return (
            <div className="sadari-select">
                <button
                    className="btn"
                    onClick={() => this.handleClick()}
                    type="button"
                >랜덤뽑기</button>
            </div>
        )
    }
}

export default SadariSelect;
