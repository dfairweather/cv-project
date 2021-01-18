import Name from './Name';
import Skills from './Skills';
import Education from './Education';
import React from 'react';
import AddButton from '../AddButton';
import Contact from '../main/Contact';
import Rectangle from '../Rectangle';

class Sidebar extends React.Component{
  render() {
    let schoolForm = null;
    if (this.props.editMode){
      schoolForm = <button 
                      className='add-school'
                      onClick={() => {this.props.handleShowModal("school")}}
                  >
                      Add New School
                      <AddButton onClick={() => {this.props.handleShowModal("school")}}></AddButton>
                  </button>
    }
    return (
      <div className="sidebar">
        <div className="address-container">
          <Rectangle/>
          <Contact 
            icon={"location_on"}
            text={this.props.address}
            handleEdit={this.props.handleEditAddress}
            category={"address"}
            editMode={this.props.editMode}
          ></Contact>
        </div>
        
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
  