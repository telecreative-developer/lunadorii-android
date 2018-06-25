import React, { Component } from 'react'
import Reports from '../components/Reports'

export default class ReportsContainer extends Component {

  state = {
    name: "",
    email: "",
    subject: "",
    reports: "",    
  }

  render() {
    return (
      <Reports
        name={this.state.name}
        email={this.state.email}
        subject={this.state.subject}
        reports={this.state.reports}
        onChangeName={(name) => this.setState({name})}
        onChangeEmail={(email) => this.setState({email})}
        onChangeSubject={(subject) => this.setState({subject})}
        onChangeReports={(reports) => this.setState({reports})}
        handleSendReport={() => alert(JSON.stringify(this.state))}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}