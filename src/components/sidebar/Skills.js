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
        ></Bullet>
    )
  }

  renderSkills() {

    return this.props.skills.map((skill) => 

      this.renderSkill(skill));
  }
     
    

  render() {
    return (
      <div className="skills">
        <Section name="skills"></Section>
        <ul>
          {this.renderSkills()}
          <AddBulletForm handleAddBullet={this.props.handleAddSkill}></AddBulletForm>
        </ul>
      </div>
    );
  }
  
  }
  
export default Skills;
  