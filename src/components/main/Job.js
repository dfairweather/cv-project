import React from 'react';
import AddButton from '../AddButton';
import DeleteButton from '../DeleteButton';

import Bullet from './JobBullet';
import EditForm from '../EditForm';

import JobTitle from './job-components/JobTitle';
import Company from './job-components/Company';
import JobDescription from './job-components/JobDescription';

class Job extends React.Component {

  renderBullet(bullet) {
      if (!bullet.beingEdited) {
        return (
                <li 
                    className="job-bullet" 
                    key={bullet.bulletId}>
                    <Bullet 
                    value={bullet} 
                    handleEditBullet={this.props.handleEditBullet}
                    jobId = {this.props.value.id} 
                    bulletId={bullet.bulletId}
                    />
                    <DeleteButton 
                      handleDelete = {this.props.handleDeleteBullet} 
                      jobId = {this.props.value.id} 
                      id={bullet.bulletId}/>
                </li>
        )
      } else {
          return (
            <li 
            className="job-bullet" 
            key={bullet.bulletId}>
            <EditForm 
              handleSubmit={this.props.handleUpdateBullet}
              value={bullet}
              jobId={this.props.value.id} 
              />
              
            <DeleteButton 
              handleDelete = {this.handleDeleteBullet} 
              jobId = {this.props.value.id} 
              value={bullet.bulletId}/>
            </li>
        )
      }
      
      
    } 
  

  renderBullets(bullets) {
    return bullets.map((bullet) => 
    this.renderBullet(bullet));
  } 

  render() {
    const { title, company, start, end, description, id, bullets } = this.props.value;
    return (
      <div className="job" key={id}>
        <JobTitle 
          text={title.toUpperCase()} 
          jobId={id} 
          handleJobEdit={this.props.handleJobEdit}
        ></JobTitle>
        <DeleteButton 
          id={id} 
          handleDelete={this.props.handleDeleteJob}
        ></DeleteButton>
        <Company company={company.toUpperCase()} start={start} end={end} id={id} handleJobEdit={this.props.handleJobEdit}></Company>
        <JobDescription 
          text={description}
          handleJobEdit={this.props.handleJobEdit}
          jobId={id}></JobDescription>
        <ul>
            {this.renderBullets(bullets)}
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
        </ul>
      </div>
    );
  }
    
}
  
export default Job;
  