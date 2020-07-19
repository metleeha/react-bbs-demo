import React from 'react';

class Member extends React.Component {
    render() {
        return(
            <div>
                <MemberProfile id={this.props.id} userName={this.props.userName}></MemberProfile>
                <MemberInfo userEmail={this.props.userEmail} phoneNm={this.props.phoneNm} regDate={this.props.regDate} regStatus={this.props.regStatus}></MemberInfo>
            </div>
        );
    }
}

class MemberProfile extends React.Component {
    render() {
        return(
            <div>
                <li>{this.props.id}</li>
                <li>{this.props.userName}</li>
            </div>
        );
    }
}

class MemberInfo extends React.Component {
    render() {
        return(
            <div>
                <li>{this.props.userEmail}</li>
                <li>{this.props.phoneNm}</li>
                <li>{this.props.regDate}</li>
                <li>{this.props.regStatus}</li>
            </div>
        );
    }
}

export default Member;