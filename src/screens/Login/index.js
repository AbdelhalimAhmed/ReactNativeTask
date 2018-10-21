import LoginScreen from './LoginScreen'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)