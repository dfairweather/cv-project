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
            address: "234 Address, State",
            email: "email addess",
            phone: "phone number",
            website: "website"
          },
          schools: [this.addDefaultSchool()],
          skills: [],
          jobs: [this.addDefaultJob()],
        }],
        displayIndex: 0,
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
    const index = current.schools.findIndex(school => school.id === schoolId);
    // Deep copy of array within array
    const schools = JSON.parse(JSON.stringify(current.schools));
    schools[index][field] = text;
    this.setState({
      history: history.concat([{
        ...current,
        schools: schools
      }]),
      displayIndex: history.length
    })
  }

  handleDeleteSchool = (schoolId) => {
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const schools = current.schools.filter((school) => {
      return school.id !== schoolId;
    });

    this.setState({
      history: history.concat([{
        ...current,
        schools: schools
      }]),
      displayIndex: history.length
    })
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
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const skills = current.skills.slice()
    const skill = this.newBullet(e.target[0].value);
    e.target[0].value = '';
    this.setState({
      history: history.concat([{
        ...current,
        skills: skills.concat(skill)
      }]),
      displayIndex: history.length
    })
  }

  handleDeleteSkill = (skillId) => {
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const skills = current.skills.filter((skill) => {
              return skill.bulletId !== skillId;
      });

    this.setState({
      history: history.concat([{
        ...current,
        skills: skills
      }]),
      displayIndex: history.length
    })
  }

  handleEditSkill = (text, skillId) => {
    console.log(text, skillId);
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const index = current.skills.findIndex(skill => skill.bulletId === skillId);
    // Deep copy of array within array
    const skills = JSON.parse(JSON.stringify(current.skills));
    skills[index]["text"] = text;
    this.setState({
      history: history.concat([{
        ...current,
        skills: skills
      }]),
      displayIndex: history.length
    })


   
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

    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const newJob = this.newJob(title, company, start, end, description);
    const jobs = current.jobs.slice();
    this.setState({
      history: history.concat([{
        ...current,
        jobs: jobs.concat(newJob)
      }]),
      displayIndex: history.length
    })


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
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const index = current.jobs.findIndex(job => job.id === jobId);
    // Deep copy of array within array
    const jobs = JSON.parse(JSON.stringify(current.jobs));
    jobs[index][field] = text;
    this.setState({
      history: history.concat([{
        ...current,
        jobs: jobs
      }]),
      displayIndex: history.length
    })
  }


  handleDeleteJob = (jobId) => {
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];
    const jobs = current.jobs.filter((job) => {
      return job.id !== jobId;
    });

    this.setState({
      history: history.concat([{
        ...current,
        jobs: jobs
      }]),
      displayIndex: history.length
    })
  }


  newBullet = (text) => {
    return {
      text: text,
      bulletId: uniqid(),
      beingEdited: false
    };
  }

  handleAddBullet = (e, jobId) => {
    e.preventDefault();
    const text = e.target[0].value;

    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];

    const newBullet = this.newBullet(text);
    const jobs = JSON.parse(JSON.stringify(current.jobs));
    const index = jobs.findIndex(job => job.id === jobId);
    jobs[index].bullets.push(newBullet)
    e.target[0].value = '';
    this.setState({
      history: history.concat([{
        ...current,
        jobs: jobs
      }]),
      displayIndex: history.length
    })
  }

  handleDeleteBullet = (jobId, bulletId) => {
    console.log(bulletId, jobId);
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];

    const jobs = JSON.parse(JSON.stringify(current.jobs));
    const index = jobs.findIndex(job => job.id === jobId);

    const bullets = jobs[index].bullets.filter((bullet) => {
      return bullet.bulletId !== bulletId;
    });

    jobs[index].bullets = bullets;
    this.setState({
      history: history.concat([{
        ...current,
        jobs: jobs
      }]),
      displayIndex: history.length
    })
  }

  handleEditBullet = (jobId, bulletId) => {
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];


    const jobs = JSON.parse(JSON.stringify(current.jobs));
    const jobIndex = jobs.findIndex(job => job.id === jobId);

    const bulletIndex = jobs[jobIndex].bullets.findIndex(bullet => bullet.bulletId === bulletId);
    
    jobs[jobIndex].bullets[bulletIndex].beingEdited = true;

    this.setState({
      history: history.concat([{
        ...current,
        jobs: jobs
      }]),
      displayIndex: history.length
    })
  }

  handleUpdateBullet = (newText, jobId, bulletId) => {
   
    console.log(jobId, bulletId, newText)
    const history = this.state.history.slice(0, this.state.displayIndex + 1);
    const current = history[history.length - 1];


    const jobs = JSON.parse(JSON.stringify(current.jobs));
    const jobIndex = jobs.findIndex(job => job.id === jobId);

    const bulletIndex = jobs[jobIndex].bullets.findIndex(bullet => bullet.bulletId === bulletId);
    
    const updatedBullet = jobs[jobIndex].bullets[bulletIndex]; 
    jobs[jobIndex].bullets[bulletIndex] = {
      text: newText,
      bulletId: updatedBullet.bulletId,
      beingEdited: false
    };
    this.setState({
      history: history.concat([{
        ...current,
        jobs: jobs
      }]),
      displayIndex: history.length
    })
  } 



  render() {
      
      const history = this.state.history.slice(0, this.state.displayIndex + 1);
      const current = history[history.length - 1];
      return (
      <div className="app">
        <Sidebar 
          address={current.contacts.address}
          handleEditAddress={this.handleEditContacts}
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
          skills={current.skills}
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
          jobs={current.jobs}
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
