import Section from '../Section';
import Editable from '../Editable';

function Profile(props) {
    return (
      <>
        <Section name="Profile"/>
        <Editable 
            text={props.profile}
            field = {"description"} 
            jobId={props.jobId} 
            handleJobEdit={props.handleEdit}>
        </Editable>
      </>
    );
  }
  
  export default Profile;
  