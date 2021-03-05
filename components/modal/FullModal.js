import React, { Component } from "react";

import { Modal as ReactModal } from "reactstrap";

export default class FullModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    const { toggle } = this.props;
    if (typeof toggle === "function") toggle();
  }

  render() {
    const { isOpen, children } = this.props;
    return (
      <div>
        <ReactModal
          isOpen={isOpen}
          toggle={this.toggle}
          className={"full-screen-modal modal__full-width"}
        >
          <div className="Modal-body full-screen-modal-body">
            
            <div className="modal-inner">
              <div className="modal-content" style={this.props.style}>{children}</div>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}