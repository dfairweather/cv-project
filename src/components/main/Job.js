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
    if (this.props.editMode) {
      bulletForm = (
      <li>
        <form 
          onSubmit={(e) => {
          this.props.handleAddBullet(e, id)
          }} 
          className="bullet-form">
          <input type="text" name="bullet" placeholder="Add bullet point..."></input>
        </form>
      <AddButton/>
      </li>
      )
    }
    return (
      <div className="job" key={id}>
        <DeleteButton 
          className='job-delete'
          id={id} 
          handleDelete={this.props.handleDeleteJob}
        ></DeleteButton>
        <JobTitle 
          text={title.toUpperCase()} 
          jobId={id} 
          handleEdit={this.props.handleJobEdit}
        ></JobTitle>
        
        <Company 
          company={company.toUpperCase()} 
          start={start} 
          end={end} id={id} 
          handleEdit={this.props.handleJobEdit}></Company>
        <JobDescription 
          text={description}
          handleEdit={this.props.handleJobEdit}
          jobId={id}></JobDescription>
        <ul>
            {this.renderBullets(bullets)}
            {bulletForm}
        </ul>
      </div>
    );
  }
    
}
  
export default Job;
  