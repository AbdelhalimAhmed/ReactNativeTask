import ProfileScreen from './ProfileScreen'
import { connect } from 'react-redux'
import { getProfile } from '../../actions'

// get the state from store
const mapStateToProps = (state) => ({
  ...state
})

// defined actios
const mapDispatchToProps = {
  getProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
