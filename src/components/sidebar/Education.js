
import Section from '../Section';
import School from './School';
import React from 'react';

class Education extends React.Component {

  renderSchool = (school) => {
    return (
      <School
        id={school.id}
        handleEditSchool={this.props.handleEditSchool}
        key={school.id}
        school={school}
        handleDeleteSchool={this.props.handleDeleteSchool}
        editMode={this.props.editMode}
      />
    )
  }
  
  renderSchools = () => {
      return this.props.schools.map( school => 
      this.renderSchool(school))
  
  }

  render() {
    return (
      <div className="education">
        <Section name="Education"/>
        <div style={{
          margin: "20px 0",
          width: "40px", 
          height: "1px", 
          background: "#454545"}}/>
        {this.renderSchools()}
      </div>
    );
  }
}
  
export default Education;
  