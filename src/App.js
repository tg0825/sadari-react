import React, { Component } from 'react';
import Member from './components/Member';
import Add from './components/Add';
import './App.css';

class App extends Component {
    state = {
        memberData: [
            {
                name: '윤태건',
                team: '개발'
            },
            {
                name: '박우현',
                team: '개발',
            },
            {
                name: '최재훈',
                team: '작가영입'
            }
        ]
    }

    handleClick = (member) => {
        this.setState({
            memberData: [...this.state.memberData, member]
        })
    }

    render() {
        return (
            <div>
                <Member memberList={this.state.memberData} />
                <Add
                    memberList={this.state.memberData}
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default App;
