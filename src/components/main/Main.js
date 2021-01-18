
import Experience from './Experience';
import Profile from './Profile';
import React from 'react';
import AddButton from '../AddButton';
import Contacts from './Contacts';
import Picture from './Picture';
import ImageUpload from './ImageUpload';

class Main extends React.Component {
  render() {
    
    let jobForm = null;
    if (this.props.editMode) {
      jobForm = <button 
                  className="add-job"
                  onClick={() => {this.props.handleShowModal("job")}}>   
                  Add New Job
                  <AddButton 
                  ></AddButton>
                </button>
    }
    return (
      <div className="main">
        <div className="main-head">
          <ImageUpload editMode={this.props.editMode}></ImageUpload>
          {/* <Picture 
            picture={this.props.picture} 
            editMode={this.props.editMode}
            handleSavePicture={this.props.handleSavePicture}
          /> */}
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
  