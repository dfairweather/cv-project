import React from 'react';
import AddButton from '../AddButton';
import DeleteButton from '../DeleteButton';
import Bullet from '../Bullet';
import JobTitle from './job-components/JobTitle';
import Company from './job-components/Company';
import JobDescription from './job-components/JobDescription';

class Job extends React.Component {

  renderBullet(bullet) {
        return (
          <Bullet
            className="job-bullet"
            key={bullet.bulletId}
            text={bullet.text}
            handleDelete={this.props.handleDeleteBullet}
            handleEdit={this.props.handleUpdateBullet}
            id={this.props.value.id}
            field={bullet.bulletId}
            editMode={this.props.editMode}
          ></Bullet>
          )
      }

  renderBullets(bullets) {
    return bullets.map((bullet) => 
    this.renderBullet(bullet));
  } 

  render() {
    const { title, company, start, end, description, id, bullets } = this.props.value;
    let bulletForm = null;
    let deleteButton = null;
    let bulletList;
    if (this.props.editMode) {
      bulletForm = (
      <li>
        <form 
          onSubmit={(e) => {
          this.props.handleAddBullet(e, id)
          }} 
          className="bullet-form">
          <input 
            type="text" 
            name="bullet" 
            placeholder="Add bullet point..."
          ></input>
        </form>
      <AddButton/>
      </li>
      )
      deleteButton = (
        <DeleteButton 
        className='job-delete'
        id={id} 
        handleDelete={this.props.handleDeleteJob}
      ></DeleteButton>
      )
    }
    if(bullets) {
      bulletList = (
      <ul>
        {this.renderBullets(bullets)}
        {bulletForm}
      </ul>
      )
    } else {
      bulletList =  <ul>
      {bulletForm}
    </ul>
    }
    return (
      <div className="job" key={id}>
       {deleteButton}
        <JobTitle 
          text={title.toUpperCase()} 
          jobId={id} 
          handleEdit={this.props.handleJobEdit}
          editMode={this.props.editMode}
        ></JobTitle> 
        <Company 
          company={company.toUpperCase()} 
          start={start} 
          end={end} id={id} 
          handleEdit={this.props.handleJobEdit}
          editMode={this.props.editMode}
        ></Company>
        <JobDescription 
          text={description}
          handleEdit={this.props.handleJobEdit}
          jobId={id}
          editMode={this.props.editMode}
        ></JobDescription>
        {bulletList}
      </div>
    );
  }
    
}
  
export default Job;
  