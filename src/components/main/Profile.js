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
            handleEdit={props.handleEdit}
            editMode={props.editMode}
        ></Editable>
      </>
    );
  }
  
  export default Profile;
  