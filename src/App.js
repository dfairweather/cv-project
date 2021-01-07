import  Sidebar  from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import './styles/styles.css';
import React from 'react';
import uniqid from 'uniqid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        history: [{
          name: 'Dexter Fairweather',
          occupation: 'web developer',
          profile: "Career objective here. Belina lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          contacts: {
            email: "email addess",
            phone: "phone number",
            website: "website"
          },
          schools: [this.addDefaultSchool()],
        }],
        displayIndex: 0,
        
        
        skills: [],
        
        
        jobs: [this.addDefaultJob()],
        showSchoolForm: false,
        showJobForm: false
    }
  }

  handleUndo = () => {
    const index = this.state.displayIndex;
    if (index) {
        this.setState({
        displayIndex: this.state.displayIndex - 1,
      })
    }

    
  }
  
  handleRedo = () => {
    const index = this.state.displayIndex;
    if (index < this.state.history.length - 1) {
        this.setState({
        displayIndex: this.state.displayIndex + 1,
      })
    }

    
  }

  handleEditName = (name) => {
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    this.setState({
      history: history.concat([{
        ...current,
        name: name
      }]),
      displayIndex: history.length
    })
  }

  handleEditOccupation = (occupation) => {
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    this.setState({
      history: history.concat([{
        ...current,
        occupation: occupation
      }]),
      displayIndex: history.length
    })
  }


  handleEditProfile = (profile) => {
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    this.setState({
      history: history.concat([{
        ...current,
        profile: profile
      }]),
      displayIndex: history.length
    })
  }

  handleEditContacts = (text, field) => {
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const newContacts = {...current.contacts};
    newContacts[field] = text;
    this.setState({
      history: history.concat([{
        ...current,
        contacts: newContacts
      }]),
      displayIndex: history.length
    })



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
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const newSchool = this.newSchool(major, school, start, end);
    const schools = current.schools.slice();
    this.setState({
      history: history.concat([{
        ...current,
        schools: schools.concat(newSchool)
      }]),
      displayIndex: history.length
    })
  }

  addDefaultSchool() {
    return this.newSchool('Biology','name of university', 2016, 2020)
  }

  handleShowSchoolForm = () => {
    this.setState({showSchoolForm: !this.state.showSchoolForm})
  }

  handleEditSchool = (text, schoolId, field, ) => {
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const newSchools = current.schools.slice();
    console.log(newSchools)
    const index = newSchools.findIndex(school => school.id === schoolId);
    newSchools[index][field] = text;
    this.setState({
      history: history.concat([{
        ...current,
        schools: newSchools
      }]),
      displayIndex: history.length
    })
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
      
      const history = this.state.history.slice(0, this.state.displayIndex + 1);
      const current = history[history.length - 1];
      return (
      <div className="app">
        <Sidebar 
          handleEditName={this.handleEditName}
          handleEditOccupation={this.handleEditOccupation}
          handleEditSchool={this.handleEditSchool}
          name={current.name} 
          occupation={current.occupation}
          schools={current.schools} 
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
          contacts={current.contacts}
          handleEditContacts={this.handleEditContacts}
          handleAddBullet={this.handleAddBullet} 
          handleDeleteBullet={this.handleDeleteBullet} 
          handleEditBullet={this.handleEditBullet}
          handleUpdateBullet={this.handleUpdateBullet}
          handleSubmitJob={this.handleSubmitJob}
          profile={current.profile}
          handleEditProfile={this.handleEditProfile}
          handleJobEdit={this.handleJobEdit}
          handleDeleteJob={this.handleDeleteJob}
          jobs={this.state.jobs}
          handleShowJobForm={this.handleShowJobForm}
          showJobForm={this.state.showJobForm}
          handleUndo={this.handleUndo}
          handleRedo={this.handleRedo}
        />
      </div>
    );
  }
  
}

export default App;
