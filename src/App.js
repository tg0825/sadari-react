import React, { Component } from 'react';
import Head from './components/Head';
import MemberList from './components/MemberList';
import MemberAdd from './components/MemberAdd';
import SadariSelect from './components/SadariSelect';
import Result from './components/Result';
import './App.scss';

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
            },
            {
                name: '이원희',
                team: '운영'
            }
        ],
        resultData: []
    }

    // 돔 처리 전
    componentWillMount() {
        const memberData = localStorage.memberData;

        if (memberData) {
            this.setState({
                memberData: JSON.parse(memberData)
            })
        } else {
            // localStorage.contactData = JSON.stringify(this.state.contactData);
            localStorage.memberData = JSON.stringify(this.state.memberData);
        }
    }

    // 업데이트 후
    componentDidUpdate(prevProps, prevState) {
        // 이전 값과 지금 값을 비교
        if (JSON.stringify(prevState.memberData) != JSON.stringify(this.state.memberData)) {
            localStorage.memberData = JSON.stringify(this.state.memberData);
        }
    }

    handleClick = (member) => {
        this.setState({
            memberData: [...this.state.memberData, member]
        })
    }

    clickGame = (result) => {
        this.setState({
            resultData: result
        })
    }

    handleException = (e) => {
        const key = e.currentTarget.dataset.key;
        const newArray = JSON.parse(JSON.stringify(this.state.memberData));
        newArray[key].exception = newArray[key].exception ? false : true;

        this.setState({
            memberData: newArray
        });
    }

    render () {
        return (
            <div className="sadari wrap">
                <Head />
                <MemberList
                    memberData={this.state.memberData}
                    onException={this.handleException}
                />

                <MemberAdd
                    memberData={this.state.memberData}
                    onClick={this.handleClick}
                />

                <SadariSelect
                    memberData={this.state.memberData}
                    onClick={this.clickGame}
                />
                <Result resultData={this.state.resultData}/>
            </div>
        );
    }
}

export default App;
