import React, { Component } from 'react';
import Head from './components/Head';
import MemberList from './components/MemberList';
import MemberAdd from './components/MemberAdd';
import SadariSelect from './components/SadariSelect';
import Result from './components/Result';
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
            },
            {
                name: '이원희',
                team: '운영'
            }
        ],
        resultData: []
    }

    handleClick = (member) => {
        this.setState({
            memberData: [...this.state.memberData, member]
        })
    }

    handleCreate = (result) => {
        this.setState({
            resultData: result
        })
    }

    handleRemove = () => {
        console.log(1);
        // this.setState({
        //
        // });
    }

    render () {
        return (
            <div className="sadari wrap">
                <Head />
                <MemberList
                    memberList={this.state.memberData}
                    onRemove={this.handleRemove}
                />

                <MemberAdd
                    memberList={this.state.memberData}
                    onClick={this.handleClick}
                />

                <SadariSelect
                    memberList={this.state.memberData}
                    onClick={this.handleCreate}
                />
                <Result resultData={this.state.resultData}/>
            </div>
        );
    }
}

export default App;
