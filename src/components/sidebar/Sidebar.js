import Name from './Name';
import Skills from './Skills';
import Education from './Education';
import React from 'react';
import SchoolForm from './SchoolForm';
import AddButton from '../AddButton';
import Contact from '../main/Contact';

class Sidebar extends React.Component{
  render() {
    const showSchoolForm = this.props.showSchoolForm;
    let schoolForm;
    if (showSchoolForm) {
      schoolForm = <SchoolForm
                      onSubmit={this.props.handleSubmitSchool}
                      onCancel={this.props.handleShowSchoolForm}
                  ></SchoolForm>
    } else if (!showSchoolForm && this.props.editMode){
      schoolForm = <div className='add-school'>
                   Add New School
                   <AddButton onClick={this.props.handleShowSchoolForm}></AddButton>
                  </div>
    } else {
      schoolForm = null;
    }
    return (
      <div className="sidebar">
        <Contact 
          icon={"location_on"}
          text={this.props.address}
          handleEdit={this.props.handleEditAddress}
          category={"address"}
          editMode={this.props.editMode}
        ></Contact>
        <Name 
          handleEditName={this.props.handleEditName}
          name={this.props.name}
          occupation={this.props.occupation}
          handleEditOccupation={this.props.handleEditOccupation}
          editMode={this.props.editMode}
        />
        <Education 
          schools={this.props.schools}
          handleEditSchool={this.props.handleEditSchool}
          handleDeleteSchool={this.props.handleDeleteSchool}
          editMode={this.props.editMode}
        ></Education>
        {schoolForm}
        <Skills 
          skills={this.props.skills}
          handleAddSkill={this.props.handleAddSkill}
          handleDeleteSkill={this.props.handleDeleteSkill}
          handleEditSkill={this.props.handleEditSkill}
          editMode={this.props.editMode}
        />
      </div>
    );
  }
}
    
  
export default Sidebar;
  