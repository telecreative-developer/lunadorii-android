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
  }

  handleSendReport(){
    this.props.report(this.state)
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
        handleSendReport={() => alert(JSON.stringify(this.state))}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

    report: (data) => dispatch(report(data)),
    
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