import React, { Component } from 'react'
import Reports from '../components/Reports'

import { connect } from 'react-redux'
import { report } from '../actions/report'

class ReportsContainer extends Component {

  state = {
    name: "",
    email: "",
    subject: "",
    content: "",
    buttonReport: false
  }

  async handleSendReport(){
    const {name, email, subject, content} = this.state
    this.setState({buttonReport: true})
    await this.props.report(name, email, subject, content)
    await alert(this.props.getResultReport.message)
    this.setState({buttonReport: false})
    await this.props.navigation.goBack()
  }

  render() {
    return (
      <Reports
        name={this.state.name}
        email={this.state.email}
        subject={this.state.subject}
        reports={this.state.content}
        onChangeName={(name) => this.setState({name})}
        onChangeEmail={(email) => this.setState({email})}
        onChangeSubject={(subject) => this.setState({subject})}
        onChangeReports={(content) => this.setState({content})}
        handleSendReport={() => this.handleSendReport()}
        buttonReport={this.state.buttonReport}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

    report: (name, email, subject, content) => dispatch(report(name, email, subject, content)),
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    getResultReport: state.getResultReport
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer)