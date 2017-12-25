import { connect } from 'react-redux'
import App from '../component/App'

const mapStateToProps = (state, ownProps) => {
    return ({
      ...state.inst.app
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const AppContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App)

export default AppContainer
