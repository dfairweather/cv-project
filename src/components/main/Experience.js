import Section from '../Section';
import Job from './Job';
import React from 'react';


class Experience extends React.Component {

  renderJob = (job) => {
    return(
      <Job 
        handleAddBullet={this.props.handleAddBullet} 
        handleDeleteBullet = {this.props.handleDeleteBullet} 
        handleEdit = {this.props.handleEdit}
        handleEditBullet={this.props.handleEditBullet}
        handleUpdateBullet={this.props.handleUpdateBullet}
        handleJobEdit = {this.props.handleJobEdit}
        handleDeleteJob={this.props.handleDeleteJob}
        value={job} 
        key={job.id}
        editMode={this.props.editMode}
      />
    )
  }

  renderJobs = () => {
      return this.props.jobs.map((job) => 
      this.renderJob(job));
  }

  render () {
      return (
        <div className="experience">
        <Section name="Experience"/>
        {this.renderJobs()}
        </div>
      );
  }
}
  
export default Experience;
  