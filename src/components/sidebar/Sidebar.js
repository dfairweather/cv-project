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
    } else {
      schoolForm = <div className='add-school'>
                   Add New School
                   <AddButton onClick={this.props.handleShowSchoolForm}></AddButton>
                  </div>
    }
    return (
      <div className="sidebar">
        <Contact 
          icon={"location_on"}
          text={this.props.address}
          handleEdit={this.props.handleEditAddress}
          category={"address"}
        ></Contact>
        <Name 
          handleEditName={this.props.handleEditName}
          name={this.props.name}
          occupation={this.props.occupation}
          handleEditOccupation={this.props.handleEditOccupation}
        />
        <Education 
          schools={this.props.schools}
          handleEditSchool={this.props.handleEditSchool}
          handleDeleteSchool={this.props.handleDeleteSchool}
        ></Education>
        {schoolForm}
        <Skills 
          skills={this.props.skills}
          handleAddSkill={this.props.handleAddSkill}
          handleDeleteSkill={this.props.handleDeleteSkill}
          handleEditSkill={this.props.handleEditSkill}
        />
      </div>
    );
  }
}
    
  
export default Sidebar;
  