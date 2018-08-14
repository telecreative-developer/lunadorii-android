import React, { Component } from 'react'
import {ToastAndroid, Platform, BackHandler} from 'react-native'
import Reports from '../components/Reports'
import { Toast } from 'native-base'
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

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const {first_name, last_name, email } = this.props.navigation.state.params
    this.setState({
      name: `${first_name} ${last_name}`,
      email: email
    })
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.goBack() // works best when the goBack is async
    return true;
  }

  async handleSendReport(){
    const {name, email, subject, content} = this.state
    this.setState({buttonReport: true})
    await this.props.report(name, email, subject, content)
    // await alert(this.props.getResultReport.message)
    if(Platform.OS === 'android'){
      ToastAndroid.showWithGravity("Saved", ToastAndroid.SHORT, ToastAndroid.CENTER)
    }else{
      Toast.show({
        text: 'Saved'
      })
    }
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