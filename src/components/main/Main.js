
import Experience from './Experience';
import Profile from './Profile';
import Form from './Form';
import React from 'react';
import AddButton from '../AddButton';
import Contacts from './Contacts';
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
    } else if (this.props.editMode) {
      jobForm = <div className="add-job">   
                  Add New Job
                  <AddButton 
                    onClick={this.props.handleShowJobForm}
                  ></AddButton>
                </div>
    } else {
      jobForm = null;
    }
    return (
      <div className="main">
        <div className="main-head">
          <Picture editMode={this.props.editMode}/>
          <Contacts 
            contacts={this.props.contacts}
            handleEdit={this.props.handleEditContacts}
            editMode={this.props.editMode}
          ></Contacts>
        </div>
        <div className="main-body">
          <Profile
            handleEdit={this.props.handleEditProfile}
            profile={this.props.profile}
            editMode={this.props.editMode}
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
            editMode={this.props.editMode}
          ></Experience>
          {jobForm}
        </div>
       
        
        
      </div>
    );
  } 
}

export default Main;
  