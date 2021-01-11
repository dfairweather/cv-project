import React from 'react';
import Bullet from '../Bullet';
import AddBulletForm from '../AddBulletForm';
import Section from '../Section';


class Skills extends React.Component {

  renderSkill(skill) {
    return (
        <Bullet 
          className="skills-bullet"
          key ={skill.bulletId}
          text={skill.text}
          handleAddSkill={this.props.handleAddSKill}
          handleDelete={this.props.handleDeleteSkill}
          handleEdit={this.props.handleEditSkill}
          id={skill.bulletId}
          editMode={this.props.editMode}
        ></Bullet>
    )
  }

  renderSkills() {

    return this.props.skills.map((skill) => 

      this.renderSkill(skill));
  }
     
    

  render() {
    let bulletForm = null;
    if (this.props.editMode) {
      bulletForm = <AddBulletForm 
      handleAddBullet={this.props.handleAddSkill}/>
 
    }
    return (
      <div className="skills">
        <Section name="skills"></Section>
        <ul>
          {this.renderSkills()}
          {bulletForm}
        </ul>
      </div>
    );
  }
  
  }
  
export default Skills;
  