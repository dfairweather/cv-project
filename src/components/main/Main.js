
import Experience from './Experience';
import Profile from './Profile';
import Form from './Form';
import React from 'react';
import AddButton from '../AddButton';
import Contacts from './Contacts';
import UndoButton from '../UndoButton';
import RedoButton from '../RedoButton';
import Picture from './Picture';

class Main extends React.Component {



 
  render() {
    const showJobForm = this.props.showJobForm;
    let jobForm;
    if (showJobForm) {
      jobForm = <Form 
                  onSubmit={this.props.handleSubmitJob}
                  onCancel={this.props.handleShowJobForm}
                ></Form>
    } else {
      jobForm = <div className="add-job">   
                  Add New Job
                  <AddButton 
                    onClick={this.props.handleShowJobForm}
                  ></AddButton>
                </div>
    }
    return (
      <div className="main">
        <UndoButton onClick={this.props.handleUndo}></UndoButton>
        <RedoButton onClick={this.props.handleRedo}></RedoButton>
        <Picture></Picture>
        <Contacts 
          contacts={this.props.contacts}
          handleEdit={this.props.handleEditContacts}
        ></Contacts>
        <Profile
            handleEdit={this.props.handleEditProfile}
            profile={this.props.profile}
        ></Profile>
        <Experience
            handleAddBullet={this.props.handleAddBullet} 
            handleDeleteBullet={this.props.handleDeleteBullet} 
            handleEdit={this.handleEdit}
            handleEditBullet={this.props.handleEditBullet}
            handleUpdateBullet={this.props.handleUpdateBullet}
            handleJobEdit={this.props.handleJobEdit}
            handleDeleteJob={this.props.handleDeleteJob}
            jobs={this.props.jobs}
        ></Experience>
        {jobForm}
      </div>
    );
  } 
}

export default Main;
  