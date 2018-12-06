import React from 'react'
import Button from './button'

import './modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: true,
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return (
      this.state.showModal && (
        <div className="modal">
          <p className="modal_p">
            By clicking "PROCEED", you agree you are 21 or older.
          </p>
          <Button text="PROCEED" buttonHandler={this.toggleModal} />
        </div>
      )
    )
  }
}

export default Modal
