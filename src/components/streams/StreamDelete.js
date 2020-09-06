import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui negative button">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    )
  }

  render() {
    return(
      <div>
        <Modal
          title="Delete Stream"
          content="Are you sure that you want to delete the stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
          />
      </div>
      )
  }
}

export default connect(null, { fetchStream })(StreamDelete)
