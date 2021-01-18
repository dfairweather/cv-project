import React from 'react';
import JobForm from '../main/Form';
import SchoolForm from '../sidebar/SchoolForm';

class Modal extends React.Component {
    onClose = e => {
        return (e.target.className === "modal-background")? this.props.handleShowModal(false) : null;
      };

    render() {
      if(!this.props.show) {
        return null;
      }
      let modal;
      if(this.props.show === "job") {
          modal = <JobForm 
          onSubmit={this.props.handleSubmitJob}
          onCancel={() => this.props.handleShowModal(false)}
          />
      } else if (this.props.show === "school") {
        modal = <SchoolForm 
        onSubmit={this.props.handleSubmitSchool}
        onCancel={() => this.props.handleShowModal(false)}
        />
      } 
      return (
          <div className="modal-background" onClick={this.onClose}>
            <div className="modal-content">
              {modal}
            </div>
          </div>
        );
  }
}

export default Modal;