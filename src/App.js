import  Sidebar  from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import './styles/styles.css';
import React from 'react';
import uniqid from 'uniqid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       
        name: 'Dexter Fairweather',
        occupation: 'web developer',
        schools: [this.addDefaultSchool()],
        showSchoolForm: false,
        skills: [],
        contacts: {
          email: "email addess",
          phone: "phone number",
          website: "website"
        },
        profile: "Career objective here. Belina lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        jobs: [this.addDefaultJob()],
        showJobForm: false
    }
  }
  

  handleEditName =(name) => {
    this.setState({name: name})
  }
  handleEditOccupation = (occupation) => {
    this.setState({occupation: occupation})
  }


  handleEditProfile = (text) => {
    this.setState({ profile: text })
  }

  handleEditContacts = (text, field) => {
    const newContacts = {...this.state.contacts};
    newContacts[field] = text;
    this.setState({contacts: newContacts})
  }



  newSchool(major, school, start, end) {
    return {
      major: major,
      school: school,
      start: start,
      end: end,
      id: uniqid(),
    };
  }

  addSchool(major, school, start, end) {
    const adding = this.newSchool(major, school, start, end);
    this.setState({schools: this.state.schools.concat(adding)})
  }

  addDefaultSchool() {
    return this.newSchool('Biology','name of university', 2016, 2020)
  }

  handleShowSchoolForm = () => {
    this.setState({showSchoolForm: !this.state.showSchoolForm})
  }

  handleEditSchool = (text, schoolId, field, ) => {
    const newSchools = this.state.schools.slice()
    const index = newSchools.findIndex(school => school.id === schoolId);
    newSchools[index][field] = text;
    this.setState({schools: newSchools})
  }
  handleDeleteSchool = (schoolId) => {
    const newSchools = this.state.schools.filter((school) => {
      return school.id !== schoolId;
    });

    this.setState({schools: newSchools})
  }

  handleSubmitSchool = e => {
    e.preventDefault();
    this.setState({showSchoolForm: false})
    this.addSchool(e.target.major.value, 
      e.target.university.value,
      e.target.start.value,
      e.target.end.value)
  }

  addDefaultJob = () => {
    const defaultJob = this.newJob('job title goes here', 'BABY GAP', '2020', 'Present',
    'Job description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    )
    const bullet1 = this.newBullet('Bullet point goes here sed do eiusmod tempor incididunt.')
    const bullet2 = this.newBullet('Ut enim ad minim veniam, exercitation ullamco laboris.')
    const bullet3 = this.newBullet('Incididunt ut labore et dolore magna aliqua.')

    defaultJob.bullets.push(bullet1, bullet2, bullet3);
    return defaultJob
  }

  newBullet = (text) => {
    return {
      text: text,
      bulletId: uniqid(),
      beingEdited: false
    };
  }
  
  handleAddSkill = (e) => {
    e.preventDefault();
    const skill = this.newBullet(e.target[0].value);
    this.setState({
      skills: this.state.skills.concat(skill)
    })
  }

  handleDeleteSkill = (skillId) => {
    const newSkills = this.state.skills.filter((skill) => {
            return skill.bulletId !== skillId;
    });

    this.setState({skills: newSkills})
  }

  handleEditSkill = (text, skillId) => {

    const newSkills = this.state.skills.slice()
    const index = newSkills.findIndex(skill => skill.bulletId === skillId);


    newSkills[index]["text"] = text
    this.setState({skills: newSkills})
  }

  newJob(title, company, start, end, description) {
    return {
      title: title,
      company: company,
      start: start,
      end: end,
      description: description,
      id: uniqid(),
      bullets: []
    };
  }

  handleShowJobForm = () => {
    this.setState({showJobForm: !this.state.showJobForm})
  }

  addJob = (title, company, start, end, description) => {
    const adding = this.newJob(title, company, start, end, description);

    this.setState({jobs: this.state.jobs.concat(adding)})


  }

  handleSubmitJob = e => {
    e.preventDefault();
    this.setState({showJobForm: false})
    this.addJob(e.target.title.value, 
      e.target.company.value,
      e.target.start.value,
      e.target.end.value,
      e.target.description.value)
  }

  handleJobEdit = (text, jobId, field, ) => {
    const newJobs = this.state.jobs.slice()
    const index = newJobs.findIndex(job => job.id === jobId);
    newJobs[index][field] = text;
    this.setState({jobs: newJobs})
  }


  handleDeleteJob = (jobId) => {
    const newJobs = this.state.jobs.filter((job) => {
      return job.id !== jobId;
    });

    this.setState({jobs: newJobs})
  }


  newBullet = (text) => {
    return {
      text: text,
      bulletId: uniqid(),
      beingEdited: false
    };
  }

  handleAddBullet = (e, jobId) => {
    // Make new bullet object
    e.preventDefault();
    const text = e.target[0].value;
    const newBullet = this.newBullet(text);

    const newJobs = this.state.jobs.slice()
    const index = newJobs.findIndex(job => job.id === jobId);
    
    newJobs[index].bullets.push(newBullet);
    this.setState({
      jobs: newJobs,
    }) 
  }

  handleDeleteBullet = (bulletId, jobId) => {
    const newJobs = this.state.jobs.slice()
    const index = newJobs.findIndex(job => job.id === jobId);

    const newBullets = newJobs[index].bullets.filter((bullet) => {
            return bullet.bulletId !== bulletId;
    });

    newJobs[index].bullets = newBullets;
    this.setState({jobs: newJobs})
  }

  handleEditBullet = (jobId, bulletId) => {

    const newJobs = this.state.jobs.slice()
    const jobIndex = newJobs.findIndex(job => job.id === jobId);

    const bulletIndex = newJobs[jobIndex].bullets.findIndex(bullet => bullet.bulletId === bulletId);
    
    newJobs[jobIndex].bullets[bulletIndex].beingEdited = true;

    this.setState({jobs: newJobs})
  }

  handleUpdateBullet = (e, jobId, bulletId, newText) => {
    e.preventDefault();

    const newJobs = this.state.jobs.slice()
    const jobIndex = newJobs.findIndex(job => job.id === jobId);

    const bulletIndex = newJobs[jobIndex].bullets.findIndex(bullet => bullet.bulletId === bulletId);
    
    const updatedBullet = newJobs[jobIndex].bullets[bulletIndex]; 
    newJobs[jobIndex].bullets[bulletIndex] = {
      text: newText,
      bulletId: updatedBullet.bulletId,
      beingEdited: false
    };
    this.setState({jobs: newJobs})
  } 



  render() {
      return (
      <div className="app">
        <Sidebar 
          handleEditName={this.handleEditName}
          handleEditOccupation={this.handleEditOccupation}
          handleEditSchool={this.handleEditSchool}
          name={this.state.name} 
          occupation={this.state.occupation}
          schools={this.state.schools} 
          handleSubmitSchool={this.handleSubmitSchool}
          handleShowSchoolForm={this.handleShowSchoolForm}
          showSchoolForm={this.state.showSchoolForm}
          handleAddSkill={this.handleAddSkill}
          handleDeleteSkill={this.handleDeleteSkill}
          handleEditSkill={this.handleEditSkill}
          skills={this.state.skills}
          handleDeleteSchool={this.handleDeleteSchool}
        />
        <Main 
          contacts={this.state.contacts}
          handleEditContacts={this.handleEditContacts}
          handleAddBullet={this.handleAddBullet} 
          handleDeleteBullet={this.handleDeleteBullet} 
          handleEditBullet={this.handleEditBullet}
          handleUpdateBullet={this.handleUpdateBullet}
          handleSubmitJob={this.handleSubmitJob}
          profile={this.state.profile}
          handleEditProfile={this.handleEditProfile}
          handleJobEdit={this.handleJobEdit}
          handleDeleteJob={this.handleDeleteJob}
          jobs={this.state.jobs}
          handleShowJobForm={this.handleShowJobForm}
          showJobForm={this.state.showJobForm}
        />
      </div>
    );
  }
  
}

export default App;
